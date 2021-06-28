export interface InputProps {
  id: string;
  type: 'text' | 'email';
  name: string;
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}
