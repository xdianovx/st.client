import cn from "classnames";
import Link from "next/link";

export interface iButton {
  className?: string;
  children: string;
  link?: string;
  props?: any;
}

export const Button = ({ children, className, link, props }: iButton) => {
  return (
    <Link
      href={link}
      {...props}
      className={cn(
        className,
        "inline-flex items-center justify-center rounded-[4rem] border border-grayBorder px-[20rem] py-[28rem] text-[20rem] transition-colors duration-300 ease-in-out hover:border-black hover:bg-black hover:text-white"
      )}
    >
      {children}
    </Link>
  );
};
