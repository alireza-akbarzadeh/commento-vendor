import { Separator } from "@radix-ui/react-select";
import { Badge, Icon } from "components";

type CommentItemProps = {
  userName: string;
  date: string;
  title: string;
  isRated?: boolean;
  description: string;
  likeCount: number;
  dislikeCount: number;
  howsRated?: string;
};

export function CommentItem(props: CommentItemProps) {
  const {
    date,
    description,
    dislikeCount,
    howsRated,
    title,
    likeCount,
    userName,
    isRated,
  } = props;

  return (
    <>
      <div className="flex items-center justify-between py-[15px]">
        <div className="flex items-center gap-2">
          {isRated ? (
            <Badge
              variant="success"
              className="flex items-center gap-1 rounded-S"
            >
              <Icon name="Favorite" className="text-success-main" />
              ۴.۴
            </Badge>
          ) : (
            <Icon name="Help" className="text-textAndIcon-light" />
          )}
          <p className="text-labelLarge">{title}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-textAndIcon-dark text-labelMedium">{userName}</p>
          <span className="text-textAndIcon-light">|</span>
          <p className="pt-1 text-textAndIcon-dark text-labelMedium">{date}</p>
        </div>
      </div>
      <Separator className="my-4 border border-border-lightest" />
      <p className="text-textAndIcon-darker text-bodyLarge">{description}</p>
      <div
        className={`flex items-center ${howsRated ? "justify-between" : "justify-end"} mt-4`}
      >
        {howsRated && (
          <div className="flex items-center gap-2">
            <Icon name="account" className="text-textAndIcon-dark" />
            <span className="text-textAndIcon-dark text-bodyMedium">
              {howsRated}
            </span>
          </div>
        )}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Like" className="text-success-main" />
            <span className="text-textAndIcon-dark text-bodyMedium">
              {likeCount}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Dislike" className="text-error-main" />
            <span className="text-textAndIcon-dark text-bodyMedium">
              {dislikeCount}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
