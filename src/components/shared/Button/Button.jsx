"use client"
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { useEffect, useState } from "react";

// Hook to detect device type
const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType("mobile");
      } else if (width >= 768 && width <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Check on mount and on resize
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};

export const Button = ({
  variant,
  size,
  text,
  customStyles = [],
  link,
  onClick,
}) => {
  const deviceType = useDeviceType(); // Get the current device type

  // Resolve text based on the device type or use it as a string
  const resolvedText =
    typeof text === "object"
      ? text[deviceType] || text.desktop || "Button" // Fallback for desktop or default
      : text; // If it's a string, use it directly

  const buttonClass = clsx(
    "rounded-[8px]",
    "hover:bg-secondary",
    "hover:text-primary",
    "text-center",
    "flex",
    "items-center",
    "justify-center",
    {
      "bg-primary": variant === "primary",
      "bg-transparent": variant === "secondary",
      "laptop:bg-white tablet:bg-white mobile:bg-transparent":
        variant === "tertiary",
      outline: variant === "secondary" || "tertiary",
      "outline-primary": variant === "secondary",
      "outline-grey": variant === "tertiary",
      "text-white": variant === "primary",
      "text-primary": variant === "secondary",
      "hover:outline-2": variant === "secondary",
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

  if (link) {
    return (
      <a className={mergedClass} onClick={onClick} target="_blank" href={link}>
        {resolvedText}
      </a>
    );
  }

  return (
    <button id="call-to-action-btn" onClick={onClick} className={mergedClass}>
      {resolvedText}
    </button>
  );
};
