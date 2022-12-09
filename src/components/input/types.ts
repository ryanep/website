import type { ChangeEvent } from "react";

export interface InputProps {
  id: string;
  type: "text" | "email";
  name: string;
  title: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}
