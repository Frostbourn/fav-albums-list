import { useCallback } from "react";
import Button from "../Button";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { addItem, clearList, deleteItem } from "../../slices/favListSlices";
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
import { ModalConfirmation } from "../ModalConfirmation";

export default function Modal({
  type,
  isOpen,
  setModalOpen,
  item,
}: ModalProps): JSX.Element {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = useCallback(
    (data: any) => {
      const { title } = data;
      if (title) {
        if (type === "add") {
          dispatch(
            addItem({
              id: uuid(),
              title,
              isTheBest: false,
              time: new Date().toLocaleString(),
            })
          );
          setModalOpen(false);
          toast.success(`Album ${title} added successfully.`);
        }
      }

      reset();
    },
    [item, type, dispatch, setModalOpen, reset]
  );

  const clearListHandler = useCallback(() => {
    dispatch(clearList());
    setModalOpen(false);
  }, []);

  const deleteItemHandler = useCallback(() => {
    dispatch(deleteItem(item?.id));
    toast.success(`Album ${item?.title} delated successfully.`);
  }, [item]);

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
              <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
                <Title>Add album</Title>
                <StyledForm.Group className='mb-3'>
                  <StyledForm.Control
                    type='text'
                    id='title'
                    {...register("title")}
                    placeholder='Title'
                    maxLength={50}
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
