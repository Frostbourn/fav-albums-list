export enum ButtonTypes {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset" | string | undefined;
  variant?: "primary" | "secondary" | "danger" | "success" | "warning";
}

export interface SelectProps {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}
