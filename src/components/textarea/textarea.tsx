import { TextareaProps } from "./types";

export const Textarea = ({
  id,
  name,
  title,
  rows = 5,
  onChange,
  required,
}: TextareaProps) => {
  return (
    <label htmlFor={id}>
      <div className="mb-1 text-sm font-medium">{title}</div>

      <textarea
        className="block font-medium rounded-md w-full p-3 bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-300 resize-y min-h-[136px] transition-colors"
        id={id}
        name={name}
        onChange={onChange}
        required={required}
        rows={rows}
      />
    </label>
  );
};
