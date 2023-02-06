import { Main } from "./styles";

export const MainContainer = ({
  children,
  fluid,
  ...rest
}: {
  children: React.ReactNode;
  fluid?: boolean;
}) => {
  return <Main {...rest}>{children}</Main>;
};
