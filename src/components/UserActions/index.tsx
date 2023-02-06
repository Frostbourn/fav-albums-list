import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import { DEFAULT_FILTER } from "../../constans";
import { Select, Wrapper } from "./styles";
import { Icon } from "../Item/styles";
import { MdGridView, MdViewList } from "react-icons/md";
import { useFilter } from "../../hooks/useFilter";

export const UserActions = ({
  handleFilterChange,
  viewChangeHandler,
}: {
  handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  viewChangeHandler: (view: string) => void;
}) => {
  const [isOpen, setModalOpen] = useState(false);
  const { albumLength } = useFilter();

  return (
    <Wrapper className='mb-3'>
      <Button
        className={albumLength === 0 ? "m-auto" : ""}
        onClick={() => setModalOpen(true)}
        variant='success'>
        Add new
      </Button>
      <Modal type='add' isOpen={isOpen} setModalOpen={setModalOpen} />
      {albumLength > 0 && (
        <div className='ms-md-auto d-flex gap-3'>
          <Icon onClick={() => viewChangeHandler("grid")}>
            <MdGridView />
          </Icon>
          <Icon onClick={() => viewChangeHandler("list")}>
            <MdViewList />
          </Icon>
          <Select onChange={handleFilterChange} defaultValue={DEFAULT_FILTER}>
            <option value='id'>Sort by id</option>
            <option value='title'>Sort by title</option>
            <option value='time'>Sort by date</option>
          </Select>
        </div>
      )}
    </Wrapper>
  );
};
