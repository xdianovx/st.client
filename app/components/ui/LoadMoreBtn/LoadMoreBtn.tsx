import cn from "classnames";

export interface iLoadMoreBtn {
  className?: string;
  title: string;
}

export const LoadMoreBtn = ({ className, title }: iLoadMoreBtn) => {
  return (
    <div className={cn(className, "flex cursor-pointer gap-[16rem] text-gray")}>
      <p>{title}</p>
      <svg width="20" height="19" viewBox="0 0 20 19" stroke="#6F6F6F">
        <line
          x1="0.078125"
          y1="9.51377"
          x2="19.0781"
          y2="9.51377"
          strokeWidth="0.956837"
        />
        <path d="M9.57812 19L9.57813 0" strokeWidth="0.956837" />
      </svg>
    </div>
  );
};
