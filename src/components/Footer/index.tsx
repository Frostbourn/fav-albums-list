import { StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      Made with <span className='text-danger'> ❤ </span> by{" "}
      <a href='https://jakubskowronski.com' target='_blank'>
        Jakub Skowronski
      </a>
    </StyledFooter>
  );
};
