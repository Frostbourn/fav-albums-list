import Button from "../Button";
import { MdOutlineClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalConfirmation } from "../ModalConfirmation";
import { useModalHandlers } from "../../hooks/useModal";
import { ModalProps } from "./types";
import {
  ButtonContainer,
  CloseButton,
  Container,
  StyledForm,
  Title,
  Wrapper,
} from "./styles";
import { schema } from "../../schema";

export default function Modal({
  type,
  isOpen,
  setModalOpen,
  item,
}: ModalProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { addItemHandler, clearListHandler, deleteItemHandler } =
    useModalHandlers({
      type,
      item,
      setModalOpen,
      reset,
    });

  return (
    <>
      {isOpen && (
        <Wrapper>
          <Container>
            <CloseButton
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              tabIndex={0}
              role='button'>
              <MdOutlineClose />
            </CloseButton>
            {type === "clear" && (
              <ModalConfirmation
                title='Are you sure you want to clear the list?'
                onClick={clearListHandler}
                setModalOpen={setModalOpen}
              />
            )}
            {type === "delete" && (
              <ModalConfirmation
                title={`Are you sure you want to remove ${item?.title} album from the list?`}
                onClick={deleteItemHandler}
                setModalOpen={setModalOpen}
              />
            )}
            {type === "add" && (
              <StyledForm onSubmit={handleSubmit(addItemHandler)}>
                <Title>Add album</Title>
                <StyledForm.Group className='mb-3'>
                  <StyledForm.Control
                    type='text'
                    id='title'
                    {...register("title")}
                    placeholder='Title'
                    maxLength={50}
                    autoFocus
                  />
                  {errors && (
                    <StyledForm.Text className='text-danger'>
                      {errors.title?.message?.toString()}
                    </StyledForm.Text>
                  )}
                </StyledForm.Group>

                <ButtonContainer>
                  <Button type='submit'>Add album</Button>
                </ButtonContainer>
              </StyledForm>
            )}
          </Container>
        </Wrapper>
      )}
    </>
  );
}
