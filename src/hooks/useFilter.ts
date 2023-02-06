import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { DEFAULT_FILTER } from "../constans";
import { FavItem } from "../types";

export const useFilter = () => {
  const [albumsList, setAlbumsList] = useState<FavItem[]>([]);
  const [filter, setFilter] = useState(DEFAULT_FILTER);
  //@ts-ignore
  const favList = useSelector((state) => state?.favorites?.favList);
  const favArray: FavItem[] = [...favList];
  const albumLength = useMemo(() => favArray.length, [favArray]);

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilter(e.target.value);
    },
    []
  );

  const sort = useCallback(
    (filter: string) => {
      favArray.sort(
        (a: any, b: any) =>
          b.isTheBest - a.isTheBest || a[filter].localeCompare(b[filter])
      );
      setAlbumsList(favArray);
    },
    [favArray, favList]
  );

  useEffect(() => {
    sort(filter);
  }, [filter, favList]);

  return { albumsList, albumLength, handleFilterChange };
};
