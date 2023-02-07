import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../schema";
import { FavItem } from "../types";
import { addItem, clearList, deleteItem } from "../slices/favListSlices";

export const useModalHandlers = ({
  type,
  item,
  setModalOpen,
  reset,
}: {
  type: string;
  item: FavItem | undefined;
  setModalOpen: (value: boolean) => void;
  reset: () => void;
}) => {
  const dispatch = useDispatch();

  const addItemHandler = useCallback(
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

  return { addItemHandler, clearListHandler, deleteItemHandler };
};
