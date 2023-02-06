import { FavItem } from "../../types";

export interface ModalProps {
  type: "add" | "edit" | "delete" | "clear";
  isOpen: boolean;
  setModalOpen: (value: boolean) => void;
  item?: FavItem;
}
