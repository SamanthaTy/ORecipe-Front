import { createReducer } from '@reduxjs/toolkit';
import { Recipe } from '../../@types/recipe';
import { fetchRecipes } from '../actions/recipes';

interface RecipesState {
  list: Recipe[];
  loading: boolean;
  //can be a string or null
  error: string | null;
}
export const initialState: RecipesState = {
  list: [],
  loading: false,
  error: null,
};

const recipesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRecipes.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchRecipes.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchRecipes.rejected, (state) => {
      state.error = "Error - Not found";
      state.loading = false;
    })
});

export default recipesReducer;
