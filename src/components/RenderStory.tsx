import clsx from "clsx";
import dayjs from "dayjs";
import { ChevronsUp } from "lucide-react";
import { ReactNode, useCallback } from "react";

const RenderComment = ({
  item,
  className,
}: {
  item: INewsItem;
  className?: string;
}) => {
  return (
    <div data-testid="comment" className={clsx("mt-2 mb-4", className)}>
      <div>
        <p
          className="underline text-base text-gray-500 dark:text-gray-300"
          role="link"
        >
          {item.author}
        </p>
        {item.points && (
          <p className="flex items-center text-sm ml-2 text-gray-500">
            <ChevronsUp className="text-dark dark:text-white" size={12} />
            {item.points} votes
          </p>
        )}
      </div>
      <p className="mt-2" dangerouslySetInnerHTML={{ __html: item.text }}></p>
    </div>
  );
};

export const RenderStory = ({ story }: { story: INewsItem }) => {
  const renderItems = useCallback(
    (children: INewsItem[], addMargin?: boolean) => {
      const _children: ReactNode[] = [];
      children.map((comment) => {
        _children.push(
          <RenderComment
            item={comment}
            key={`${comment.id}-${comment.parent_id}`}
            className={clsx({ "ml-6 text-sm": addMargin })}
          />
        );
        if (comment.children.length > 0) {
          _children.push(
            <div className="ml-6" key={comment.id}>
              {renderItems(comment.children, true)}
            </div>
          );
        }
      });

      return _children;
    },
    []
  );
  return (
    <div>
      <div className="flex items-center space-x-2">
        <p className="text-base underline text-gray-500">{story.author}</p>
        <p className="font-bold text-sm">{story.points} Points</p>
        <p className="text-base text-gray-600 underline italic">
          on {dayjs.unix(story.created_at_i).format("MMM DD, YYYY")}
        </p>
      </div>
      <div className="my-1">{story.text || story.title}</div>
      <div className="mt-10 w-full break-words">
        {renderItems(
          story.children.sort((a, b) => a.created_at_i - b.created_at_i) ?? []
        )}
      </div>
    </div>
  );
};
