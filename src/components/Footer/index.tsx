import { StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      Made with <span className='text-danger mx-1'> ❤ </span> by{" "}
      <a className="ms-1" href='https://jakubskowronski.com' target='_blank'>
        Jakub Skowronski
      </a>
    </StyledFooter>
  );
};
