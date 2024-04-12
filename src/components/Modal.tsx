import clsx from "clsx";
import { CircleXIcon } from "lucide-react";

export const Modal = ({
  show,
  onClose,
  className,
  headerTitle,
  children,
}: IModalProps) => {
  return (
    <div
      className={clsx(
        "absolute bg-transparent w-full left-0 top-0  h-screen overflow-hidden",
        {
          hidden: !show,
          block: show,
        }
      )}
      data-testid="Modal"
    >
      <div
        className={clsx(
          className,
          "bg-white dark:bg-gray-800 h-full shadow-lg p-5"
        )}
      >
        <div className="flex justify-between  items-center">
          <p className="font-bold">{headerTitle}</p>
          <CircleXIcon size={24} role="button" onClick={onClose} />
        </div>
        <div className="my-6 border" />
        <div className="overflow-scroll h-full">{children}</div>
      </div>
    </div>
  );
};
