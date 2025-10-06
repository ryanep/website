interface ButtonProps {
  readonly onClick?: () => void;
  readonly text: string;
  readonly type: "button" | "submit";
}

export const Button = ({ onClick, text, type }: ButtonProps) => {
  return (
    <button
      className="relative inline-block cursor-pointer rounded-full border-2 border-primary bg-transparent px-6 py-2 text-base font-medium text-white transition-all hover:bg-primary disabled:text-transparent dark:border-primary-dark dark:bg-transparent dark:hover:bg-primary-dark"
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
    >
      {text}
    </button>
  );
};
