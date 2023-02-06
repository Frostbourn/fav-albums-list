import { createSlice } from "@reduxjs/toolkit";
import { FavItem } from "../types";

function getFavListfromLocalStorage() {
  const localStorage = window.localStorage.getItem("FavMusicList");
  if (localStorage) return JSON.parse(localStorage);
  window.localStorage.setItem("FavMusicList", JSON.stringify([]));
  return [];
}

const initialState = {
  favList: getFavListfromLocalStorage(),
  sortBy: "date",
};

export const favSlice = createSlice({
  name: "FavMusicList",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.favList.push(action.payload);
      const favList = window.localStorage.getItem("FavMusicList");
      if (favList) {
        const favListArr = JSON.parse(favList);
        favListArr.push({ ...action.payload });
        window.localStorage.setItem("FavMusicList", JSON.stringify(favListArr));
      } else {
        window.localStorage.setItem(
          "FavMusicList",
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },

    deleteItem: (state, action) => {
      const favList = window.localStorage.getItem("FavMusicList");
      if (favList) {
        const favListArr = JSON.parse(favList);
        favListArr.forEach((elem: FavItem, idx: string) => {
          if (elem.id === action.payload) {
            favListArr.splice(idx, 1);
          }
        });
        window.localStorage.setItem("FavMusicList", JSON.stringify(favListArr));
        state.favList = favListArr;
      }
    },

    updateItem: (state, action) => {
      const favList = window.localStorage.getItem("FavMusicList");
      if (favList) {
        const favListArr = JSON.parse(favList);
        favListArr.forEach((elem: FavItem) => {
          if (elem.id === action.payload.id) {
            elem.title = action.payload.title;
            elem.isTheBest = action.payload.isTheBest;
          }
        });
        window.localStorage.setItem("FavMusicList", JSON.stringify(favListArr));
        state.favList = [...favListArr];
      }
    },

    sortList: (state, action) => {
      state.sortBy = action.payload;
    },

    clearList: (state) => {
      state.favList = [];
      window.localStorage.removeItem("FavMusicList");
    },
  },
});

export const { addItem, deleteItem, clearList, updateItem } = favSlice.actions;
export default favSlice.reducer;
