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
  //when you first open your app, you have to inform whether the data is loading. 
  loading: false,
  error: null,
};

const recipesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRecipes.pending, (state) => {
      // dont need the action, because no payload 
      state.loading = true;
    })
    .addCase(fetchRecipes.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
      //safely resetting your data = If error has a string (not null), then we by default set error to null
      state.error = null;
    })
    .addCase(fetchRecipes.rejected, (state) => {
      state.error = "Error - Not found";
      //because loading was set to true when we used fetchRecipeStart
      state.loading = false;
    })
});

export default recipesReducer;
