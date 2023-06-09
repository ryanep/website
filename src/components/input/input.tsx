import type { ChangeEvent } from "react";

interface InputProps {
  id: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  title: string;
  type: "email" | "text";
}

export const Input = ({
  id,
  name,
  onChange,
  required,
  title,
  type,
}: InputProps) => {
  return (
    <label htmlFor={id}>
      <div className="mb-1 text-base font-medium">{title}</div>

      <input
        className="block w-full rounded-md bg-neutral-100 p-3 font-medium transition-colors dark:bg-neutral-800 dark:text-neutral-300"
        id={id}
        name={name}
        onChange={onChange}
        required={required}
        type={type}
      />
    </label>
  );
};
