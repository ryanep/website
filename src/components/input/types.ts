import type { ChangeEvent } from "react";

export interface InputProps {
  id: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  title: string;
  type: "email" | "text";
}
