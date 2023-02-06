import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Select = styled(Form.Select)`
  max-width: 150px;
`;
