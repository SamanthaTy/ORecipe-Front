import { Outlet } from "react-router-dom";
import axios from "axios";

import Menu from "../Menu";

import Loading from "./Loading";

import "./App.scss";
import { fetchRecipes } from "../../store/actions/recipes";
import store from "../../store";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { tokenCheck } from "../../store/reducers/user";

interface AppProps {
  loading?: boolean;
}

export async function recipesLoader() {
  try {
    const response = await axios.get("http://localhost:3000/api/recipes");
    console.log(response.data);
    store.dispatch(fetchRecipes(response.data));
    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Une erreur est survenue pendant la requête");
  }
}

function App({ loading }: AppProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(tokenCheck());
    }
  }, []);

  
  if (loading) {
    return <Loading />;
  }

  return (
    <div className='app'>
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
