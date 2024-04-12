import { NewsItem } from "@/molecules/NewsItem";
import { useSearch } from "@/query/hooks/useSearch";
import { searchStore } from "@/state/search";
import { useDebounce } from "ahooks";
import { useMemo } from "react";
import { useRouteLoaderData } from "react-router-dom";

const Home = () => {
  const searchValue = searchStore((state) => state.searchValue);

  const debouncedSearch = useDebounce(searchValue, { wait: 1000 });

  const { isLoading, isError, data } = useSearch(debouncedSearch);

  const loaderData = useRouteLoaderData("home") as { hits: IHit[] };

  const items: IHit[] = useMemo(() => {
    if (data?.data) {
      return data.data.hits;
    }

    return loaderData?.hits ?? [];
  }, [loaderData, data]);

  if (isLoading) {
    return <p className="flex items-center justify-center mt-10">Loading...</p>;
  }

  if (isError) {
    return <p className="flex items-center justify-center mt-10">Error</p>;
  }

  return (
    <div className="flex flex-col mx-10 md:mx-[10%] my-10">
      {items.map((hit) => {
        return <NewsItem key={hit.objectID} item={hit} />;
      })}
    </div>
  );
};

export default Home;
