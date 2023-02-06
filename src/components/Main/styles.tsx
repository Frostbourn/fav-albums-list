import styled from "styled-components";
import { Container } from "react-bootstrap";

export const Main = styled(Container)`
  position: relative;
  margin: 100px auto;
  max-width: 90%;

  @media (min-width: 768px) {
    max-width: 70%;
  }
`;
