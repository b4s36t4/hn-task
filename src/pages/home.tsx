import { useSearch } from "@/query/hooks/useSearch";
import { searchStore } from "@/state/search";
import { useDebounce } from "ahooks";

const Home = () => {
  const searchValue = searchStore((state) => state.searchValue);

  const debouncedSearch = useDebounce(searchValue, { wait: 1000 });

  const { isLoading, isError } = useSearch(debouncedSearch);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return <p>Hello {searchValue}</p>;
};

export default Home;
