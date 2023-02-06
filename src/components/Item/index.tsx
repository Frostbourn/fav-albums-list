import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";
import toast from "react-hot-toast";
import { MdDelete, MdStars } from "react-icons/md";
import Modal from "../Modal";
import { updateItem } from "../../slices/favListSlices";
import { FavItem } from "../../types";
import { ButtonsContainer, Icon, List, ListItem, Title } from "./styles";

interface ItemProps {
  data: FavItem;
}

export default function Item({ data }: ItemProps) {
  const [isOpen, setModalOpen] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(data?.isTheBest);
  const dispatch = useDispatch();

  const handleItemUpdate = useCallback(() => {
    setIsHighlighted(!isHighlighted);
    dispatch(
      updateItem({
        ...data,
        isTheBest: !isHighlighted,
      })
    );
    handleToastDisplay();
  }, [data]);

  const handleToastDisplay = useCallback(() => {
    const message = isHighlighted
      ? `Album ${data?.title} removed from the best of the best.`
      : `Album ${data?.title} added to the best of the best.`;

    toast(message, {
      icon: "👏",
    });
  }, [isHighlighted]);

  return (
    <>
      <List>
        <ListItem>
          <Title className='fs-3 fw-bold'>{data?.title}</Title>

          <ButtonsContainer>
            <Icon
              title='Add to the best of the best'
              onClick={() => handleItemUpdate()}>
              <MdStars
                color={`${isHighlighted ? `#d9aa00` : ``}`}
                style={{ cursor: "pointer" }}
              />
            </Icon>
            <Icon
              title='Remove album from list'
              onClick={() => setModalOpen(true)}>
              <MdDelete />
            </Icon>
          </ButtonsContainer>
        </ListItem>
      </List>
      <Modal
        type='delete'
        isOpen={isOpen}
        setModalOpen={setModalOpen}
        item={data as unknown as FavItem}
      />
    </>
  );
}
