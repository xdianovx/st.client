import React from "react";

export interface iNumItem {
  data: any;
}

export const NumItem = ({ data }: iNumItem) => {
  return (
    <div className="flex flex-col">
      <hr className="text-grayBorder" />
      <p className="mt-[30rem]">{data.title}</p>
      <div className="flex items-end mt-[60rem]">
        <p className="text-[128rem] leading-[100%]">{data.num}</p>
        {data.span && (
          <p className="text-[40rem] leading-[100%] mb-[20rem]">{data.span}</p>
        )}
      </div>
    </div>
  );
};
