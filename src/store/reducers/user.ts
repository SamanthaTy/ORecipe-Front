import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  logged: boolean;
  pseudo: string | null;
}
export const initialState: UserState = {
  logged: false,
  pseudo: null,
};

export const login = createAsyncThunk<{ email: string; password: string }>(
  "LOGIN",
  async (formValues) => {
    const response = await axios.post(
      "http://localhost:3000/api/login",
      formValues,
    );
    return response.data;
  },
);

export const logout = createAction("LOGOUT");
export const tokenCheck = createAction("TOKEN_CHECK");

const userReducer = createReducer(initialState, (builder) => {
  /* builder.addCase(login.pending,(state,action)=>{

  }) */
  builder.addCase(login.fulfilled, (state, action) => {
    state.logged = action.payload.logged;
    state.pseudo = action.payload.pseudo;
    localStorage.setItem("token", action.payload.token);
    localStorage.setItem("pseudo", action.payload.pseudo);
  });
  builder.addCase(login.rejected, (state, action) => {
    console.log("Une erreur est survenue:", action.error.message);
  });
  builder.addCase(logout, (state) => {
    state.logged = false;
    state.pseudo = null;
    localStorage.removeItem("token");
    localStorage.removeItem("pseudo");
  });
  builder.addCase(tokenCheck, (state, action) => {
    state.logged = true;
    state.pseudo = localStorage.getItem("pseudo")
  })
});

export default userReducer;
