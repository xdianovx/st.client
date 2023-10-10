interface iListItem {
  title: string;
  list: any;
}

export const ListItem = ({ title, list }: iListItem) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-gray">{title}</h4>
      <ul className="max-w-[420rem] mt-[30rem] list-inside list-disc">
        {list.map((item: string, idx: any): any => (
          <li key={idx} className="leading-[200%] ">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
