import type { ChangeEvent } from "react";

export interface TextareaProps {
  id: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  title: string;
}
