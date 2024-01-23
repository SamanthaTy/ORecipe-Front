import Menu from '../Menu';
// import Recipe from '../Recipe';
// import Error from '../Error';

import Loading from './Loading';

import './App.scss';
import { Outlet } from 'react-router-dom';

interface AppProps {
  loading?: boolean;
}

function App({ loading }: AppProps) {
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
