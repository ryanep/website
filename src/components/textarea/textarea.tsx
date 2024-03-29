import type { ChangeEvent } from "react";

interface TextareaProps {
  readonly id: string;
  readonly name: string;
  readonly onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  readonly required?: boolean;
  readonly rows?: number;
  readonly title: string;
}

export const Textarea = ({
  id,
  name,
  onChange,
  required,
  rows = 4,
  title,
}: TextareaProps) => {
  return (
    <label className="flex h-full flex-col" htmlFor={id}>
      <div className="mb-1 text-base font-medium">{title}</div>

      <textarea
        className="block w-full grow resize-y rounded-md bg-neutral-100 p-3 font-medium transition-colors dark:bg-neutral-800 dark:text-neutral-300"
        id={id}
        name={name}
        onChange={onChange}
        required={required}
        rows={rows}
      />
    </label>
  );
};
