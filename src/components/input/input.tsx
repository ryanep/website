import type { InputProps } from "./types";

export const Input = ({
  id,
  type,
  name,
  title,
  onChange,
  required,
}: InputProps) => {
  return (
    <label htmlFor={id}>
      <div className="mb-1 text-sm font-medium">{title}</div>

      <input
        className="block font-medium rounded-md w-full p-3 bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-300 transition-colors"
        id={id}
        name={name}
        onChange={onChange}
        required={required}
        type={type}
      />
    </label>
  );
};
