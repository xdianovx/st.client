import cn from "classnames";

export interface iListItem {
  className?: string;
  label: string;
  value: string;
}

export const ListItem = ({ className, label, value }: iListItem) => {
  return (
    <div className={cn(className, "flex flex-col gap-[8rem]")}>
      <p className="text-gray">{label}</p>
      <p className="text-[20rem]">{value}</p>
    </div>
  );
};
