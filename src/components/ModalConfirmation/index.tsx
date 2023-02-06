import Button from "../Button";
import { Title } from "../Modal/styles";
import { ButtonContainer, ClearConfirmation } from "./styles";
import { ModalConfirmationProps } from "./types";

export const ModalConfirmation = ({
  title,
  onClick,
  setModalOpen,
}: ModalConfirmationProps): JSX.Element => {
  return (
    <ClearConfirmation>
      <Title>{title}</Title>
      <ButtonContainer>
        <Button type='button' variant='danger' onClick={onClick}>
          Yes
        </Button>
        <Button
          type='button'
          variant='secondary'
          onClick={() => setModalOpen(false)}
          onKeyDown={() => setModalOpen(false)}>
          Cancel
        </Button>
      </ButtonContainer>
    </ClearConfirmation>
  );
};
