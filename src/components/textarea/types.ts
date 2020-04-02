export interface InputProps {
  id: string;
  name: string;
  title: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}
