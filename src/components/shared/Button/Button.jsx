import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const Button = ({ variant, size, text, customStyles=[] }) => {
    const buttonClass = clsx(
      "rounded-[8px]",
      "hover:bg-secondary",
      "hover:text-primary",
      {
        "bg-primary": variant === "primary",
        "bg-transparent": variant === "secondary",
        outline: variant === "secondary",
        "outline-primary": variant === "secondary",
        "text-white": variant === "primary",
        "text-primary": variant === "secondary",
        "hover:outline-2": variant === "secondary"
      },
      {
        "text-base": size === "medium",
        "text-md": size === "large",
        "w-[209px]": size === "large",
        "w-[111px]": size === "medium",
        "px-[24px] py-[16px]": size === "large",
        "px-[10px] py-[10px]": size === "medium",
      },
      ...customStyles
    );

  // Use twMerge to ensure there are no conflicting or redundant classes
  const mergedClass = twMerge(buttonClass);

  return <button className={mergedClass}>{text}</button>;
};