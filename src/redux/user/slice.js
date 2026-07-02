import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    /* aqui serão as actions,para atualizar o initialState */
    createUser: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          address: null,
        },
      };
    },
    logoutUser: (state) => {
      return {
        ...state,
        user: null,
      };
    },
    addAddsress: (state, action) => {
      if (action.payload.location === "" || action.payload.number === "") {
        alert("preencha todos os campos");
        return { ...state };
      }

      if (state.user === null) {
        alert("Faça o login, para cadastrar um endereço");
      }

      return {
        ...state,
        user: {
          ...state.user,
          address: {
            location: action.payload.location,
            number: action.payload.number,
          },
        },
      };
    },

    deleteAddress: (state) => {
      return {
        ...state,
        user: {
          ...state.user,
          address: null,
        },
      };
    },
  },
});

export const { createUser, logoutUser, addAddsress, deleteAddress } =
  userSlice.actions;

export default userSlice.reducer;
