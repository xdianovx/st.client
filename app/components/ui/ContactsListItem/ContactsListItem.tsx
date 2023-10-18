import cn from "classnames";

interface iContactsListItem {
  className?: string;
  label: string;
  list: any;
}

export const ContactsListItem = ({
  className,
  label,
  list,
}: iContactsListItem) => {
  return (
    <div className={cn("", className)}>
      <h5 className="text-gray">{label}</h5>
      <div className="flex flex-col gap-[16rem] mt-[24rem] text-[20rem]">
        {list.map((item: string, idx: any) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </div>
  );
};
