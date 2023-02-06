import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const Wrapper = styled.main`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Container = styled.section`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CloseButton = styled.aside`
  position: absolute;
  cursor: pointer;
  top: 47px;
  right: 15px;
  padding: 0.5rem;
  background-color: #e8e8e8;
  font-size: 1rem;
  color: #000000;
  transition: 0.3s ease all;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
  z-index: 1001;
  &:hover {
    background-color: #e32525;
    color: #eee;
  }
`;

export const Title = styled.h3`
  color: #000000;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  label {
    font-size: 1rem;
    color: #000000;
  }
`;

export const ButtonContainer = styled.footer`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`;

export const ClearConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
