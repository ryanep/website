export interface InputProps {
  id: string;
  name: string;
  title: string;
  rows?: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}
