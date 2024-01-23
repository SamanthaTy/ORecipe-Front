import { useEffect } from "react";
import App from "../components/App/App"
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchRecipes } from "../store/actions/recipes";
import Page from "../components/Page";
import { useLocation } from 'react-router-dom';

function Root() {

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.recipes.loading || state.recipes.list.length <1);

  const { pathname } = useLocation();
  
  useEffect(()=> {
    dispatch(fetchRecipes());
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Page>
      <App loading={isLoading}/>
    </Page>
  )
}

export default Root;