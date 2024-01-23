import { useEffect } from "react";
import App from "../components/App/App"
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchRecipes } from "../store/actions/recipes";
import Page from "../components/Page";

function Root() {

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.recipes.loading || state.recipes.list.length <1);

  useEffect(()=> {
    dispatch(fetchRecipes());
  }, []);

  return (
    <Page>
      <App loading={isLoading}/>
    </Page>
  )
}

export default Root;