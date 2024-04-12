import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronsUp } from "lucide-react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

export const NewsItem = ({ item }: { item: IHit }) => {
  const navigate = useNavigate();
  const onClickNewsItem = useCallback(() => {
    navigate(`item/${item.objectID}`, { state: { selectedItem: item } });
  }, [item, navigate]);

  if (!item.title) {
    return null;
  }

  return (
    <div
      className="my-2 w-full border rounded shadow-sm p-4"
      role="button"
      onClick={onClickNewsItem}
    >
      <div className="flex">
        <p>{item.title}</p>
        <a href={item.url} className="text-sm ml-2 underline text-gray-500">
          (Link)
        </a>
      </div>
      <div className="mt-4 flex text-sm">
        <p className="text-sm text-gray-500 underline">
          {item.num_comments} Comments
        </p>
        <p className="flex text-sm ml-2 text-gray-500">
          <ChevronsUp size={20} /> {item.points} votes
        </p>
        <p className="ml-2 dark:text-gray-400">
          Posted: {dayjs().to(dayjs.unix(item.created_at_i))}
        </p>
      </div>
    </div>
  );
};
