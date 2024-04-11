import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../keys";
import axios from "axios";

interface IHit {
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string | number;
  points: number;
  story_id: number;
  title: string;
  updated_at: string;
  url: string;
}

interface ISearchResult {
  hits: IHit[];
}

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
