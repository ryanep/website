import { ChangeEvent } from 'react';

export interface TextareaProps {
  id: string;
  name: string;
  title: string;
  rows?: number;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}
