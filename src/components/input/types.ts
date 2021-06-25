export interface InputProps {
  id: string;
  type: 'text';
  name: string;
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}
