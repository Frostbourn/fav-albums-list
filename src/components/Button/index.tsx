import { StyledButton } from "./styles";
import { ButtonProps, ButtonTypes, SelectProps } from "./types";

export default function Button({
  children,
  type,
  className,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton type={type as ButtonTypes} className={className} {...rest}>
      {children}
    </StyledButton>
  );
}
