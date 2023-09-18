export interface iText {
  className?: string;
  size: "sm" | "md" | "md2" | "xl";
  text: string | any[];
}

export const Text = ({ className, size, text }: iText) => {
  switch (size) {
    case "sm":
      return <p className="text-[24rem] leading-[140%]">{text}</p>;

    case "md":
      return <p className="text-[46rem] font-light leading-[140%]">{text}</p>;

    case "md2":
      return <p className="text-[40rem] font-light leading-[140%]">{text}</p>;

    case "xl":
      return <p>{text}</p>;
  }
};
