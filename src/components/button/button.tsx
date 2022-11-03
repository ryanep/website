import { ButtonProps } from "./types";

export const Button = ({ type, text, onClick }: ButtonProps) => {
  return (
    <button
      className="inline-block relative py-2 px-6 transition-all rounded-full bg-transparent border-2 font-medium text-primary dark:bg-primary-dark hover:text-white border-primary dark:border-primary-dark hover:bg-primary dark:bg-transparent dark:hover:bg-primary-dark disabled:text-transparent cursor-pointer text-sm"
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
    >
      {text}
    </button>
  );
};
