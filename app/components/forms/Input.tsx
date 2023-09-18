import classNames from "classnames";
import cn from "classnames";

interface iInput {
  placeholder?: string;
  type?: "email" | "number" | "text";
  label?: string;
  className?: string;
}

export const Input = ({
  placeholder,
  className,
  type = "text",
  label,
}: iInput) => {
  return (
    <div className={cn(className, "")}>
      <input
        type="text"
        placeholder={placeholder}
        className="block border-b py-[16rem] leading-[100%] border-black w-full"
      />
    </div>
  );
};
