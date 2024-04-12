import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../keys";
import axios from "axios";

export const useGetNewsDetails = (objectID: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.NEWS_ITEM, objectID],
    queryFn: async () => {
      return await axios.get<INewsItem>(`/items/${objectID}`);
    },
    enabled: !!objectID,
  });
};
