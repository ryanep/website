import type { ChangeEvent } from "react";

interface InputProps {
  readonly autoComplete?: string;
  readonly id: string;
  readonly name: string;
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly required?: boolean;
  readonly title: string;
  readonly type: "email" | "text";
}

export const Input = ({
  autoComplete,
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
        autoComplete={autoComplete}
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
