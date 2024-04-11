import { searchStore } from "@/state/search";
import clsx from "clsx";

export const Header = ({ className }: IHeaderProps) => {
  const searchValue = searchStore((state) => state.searchValue);

  const onChangeSearch = searchStore((state) => state.updateSearchValue);

  return (
    <ul
      className={clsx("flex mx-auto md:mx-28 py-5 justify-between", className)}
    >
      <li className="text-2xl font-bold">HackerNews</li>
      <li>
        <input
          placeholder="Search"
          value={searchValue}
          onChange={(e) => onChangeSearch(e.target.value)}
          className="py-2 px-2 text-base w-80 dark:bg-gray-100 placeholder:text-black text-black outline-none"
        />
      </li>
    </ul>
  );
};
