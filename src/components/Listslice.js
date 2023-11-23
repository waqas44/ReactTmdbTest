import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const ListSlice = createSlice({
  name: 'ListSlice',
  initialState,
  reducers: {
    addList: (state, action) => {
      state.list = [...state.list, action.payload];

      localStorage.setItem('List', JSON.stringify(state.list));
    },

    getList: (state) => {
      const storedList = localStorage.getItem('List');
      state.list = storedList ? JSON.parse(storedList) : [];
    },

    clearList: (state) => {
      state.list = [];
      localStorage.removeItem('List');
    },

    RemoveList: (state, action) => {
      const updatedList = state.list.filter(
        (item) => item.id !== action.payload
      );
      state.list = updatedList;
      localStorage.setItem('List', JSON.stringify(updatedList));
    },
  },
});

export const { addList, getList, clearList, RemoveList } = ListSlice.actions;

export default ListSlice.reducer;
