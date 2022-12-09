import type { TextareaProps } from "./types";

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
        className="block min-h-full w-full resize-y rounded-md bg-neutral-100 p-3 font-medium transition-colors dark:bg-neutral-800 dark:text-neutral-300"
        id={id}
        name={name}
        onChange={onChange}
        required={required}
        rows={rows}
      />
    </label>
  );
};
