import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*export const FETCH_RECIPES_START = "FETCH_RECIPES_START";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR";

export const fetchRecipesStart = createAction(FETCH_RECIPES_START);
export const fetchRecipesSuccess = createAction<Recipe[]>(FETCH_RECIPES_SUCCESS);
export const fetchRecipesError = createAction<string>(FETCH_RECIPES_ERROR);*/

export const FETCH_RECIPES = "FETCH_RECIPES";

export const fetchRecipes = createAsyncThunk(FETCH_RECIPES, async () => {
  const response = await axios.get("http://localhost:3000/api/recipes");
  return response.data;
})
