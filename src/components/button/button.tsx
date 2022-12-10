import type { ButtonProps } from "./types";

export const Button = ({ onClick, text, type }: ButtonProps) => {
  return (
    <button
      className="relative inline-block cursor-pointer rounded-full border-2 border-primary bg-transparent py-2 px-6 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white disabled:text-transparent dark:border-primary-dark dark:bg-transparent dark:hover:bg-primary-dark"
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
    >
      {text}
    </button>
  );
};
