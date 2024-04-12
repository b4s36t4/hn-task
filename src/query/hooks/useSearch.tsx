import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../keys";
import axios from "axios";

export const useSearch = (searchValue: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SEARCH, searchValue],
    queryFn: async () => {
      return await axios.get<ISearchResult>("/search", {
        params: { query: searchValue },
      });
    },
    enabled: !!searchValue,
  });
};
