import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const Button = ({ variant, size, text }) => {
    const buttonClass = clsx(
      "text-white", // Always apply white text
      "rounded-[8px]",
      {
        "bg-primary": variant === "primary",
        "bg-secondary": variant === "secondary",
      },
      {
        "text-base": size === "medium",
        "text-md": size === "large"
      },
      {
        "w-[209px]": size === "large",
        "w-[111px]": size === "medium",
      },
      {
        "px-[24px] py-[16px]": size === "large",
        "px-[10px] py-[10px]": size === "medium",
      },
    );

  // Use twMerge to ensure there are no conflicting or redundant classes
  const mergedClass = twMerge(buttonClass);

  return <button className={mergedClass}>{text}</button>;
};
