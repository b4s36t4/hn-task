import { searchStore } from "@/state/search";
import clsx from "clsx";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Header = ({ className }: IHeaderProps) => {
  const searchValue = searchStore((state) => state.searchValue);

  const onChangeSearch = searchStore((state) => state.updateSearchValue);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) {
      return;
    }

    onChangeSearch(query);
  }, [onChangeSearch, searchParams]);

  const onChange = useCallback(
    (value: string) => {
      onChangeSearch(value);

      const newParams = new URLSearchParams();
      newParams.append("query", value);

      setSearchParams(newParams);
    },
    [onChangeSearch, setSearchParams]
  );

  return (
    <ul
      className={clsx("flex mx-auto md:mx-28 py-5 justify-between", className)}
    >
      <li className="text-2xl font-bold">HackerNews</li>
      <li>
        <input
          placeholder="Search"
          value={searchValue}
          onChange={(e) => onChange(e.target.value)}
          className="py-2 border rounded-md px-5 dark:border-none text-base w-80 dark:bg-gray-100 placeholder:text-black text-black outline-none"
        />
      </li>
    </ul>
  );
};
