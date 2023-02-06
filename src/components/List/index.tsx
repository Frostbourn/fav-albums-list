import { useCallback, useState } from "react";
import Item from "../Item";
import { UserActions } from "../UserActions";
import { ItemsList } from "../List/styles";
import { FavItem } from "../../types";
import { useFilter } from "../../hooks/useFilter";

export default function List() {
  const [view, setView] = useState("list");
  const { albumsList, albumLength, handleFilterChange } = useFilter();

  const viewChangeHandler = useCallback((view: string) => {
    setView(view);
  }, []);

  return (
    <>
      <UserActions
        handleFilterChange={handleFilterChange}
        viewChangeHandler={viewChangeHandler}
      />
      {albumLength > 0 && (
        <ItemsList view={view}>
          {albumsList.map((elem: FavItem) => (
            <Item data={elem} key={elem?.id} />
          ))}
        </ItemsList>
      )}
    </>
  );
}
