import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FETCH_RECIPES = "FETCH_RECIPES";

export const fetchRecipes = createAsyncThunk(FETCH_RECIPES, async () => {
  const response = await axios.get("http://localhost:3000/api/recipes");
  return response.data;
})
