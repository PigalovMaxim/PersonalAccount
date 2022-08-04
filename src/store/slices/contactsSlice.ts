import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContactSlice, IContact } from "../../other/types";

const initialState: IContactSlice = {
  contacts: []
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    deleteContact: (state, actions: PayloadAction<number>) => {
        state.contacts.forEach((contact, index) => {
            if(contact.id === actions.payload) state.contacts.splice(index, 1);
        });
    },
    changeContact: (state, actions: PayloadAction<IContact>) => {
        state.contacts.forEach((contact, index) => {
            if(contact.id === actions.payload.id) state.contacts[index] = actions.payload;
        });
    },
    addContact: (state, actions: PayloadAction<IContact>) => {
        state.contacts.push(actions.payload);
    },
  },
});

export const { deleteContact, addContact, changeContact } = counterSlice.actions;

export default counterSlice.reducer;
