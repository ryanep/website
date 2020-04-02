export interface ButtonProps {
  type: 'button' | 'submit';
  text: string;
  onClick?: () => void;
}
