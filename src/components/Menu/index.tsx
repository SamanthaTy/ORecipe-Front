import { useSelector } from 'react-redux';

import './styles.scss';
import { Link } from 'react-router-dom';

function Menu() {
  const recipes = useSelector((state: any) => state.recipes.list);
  
  return (
    <nav className="menu">
      <Link
        className="menu-link menu-link--active"
        to="/"
      >
        Accueil
      </Link>
      {recipes.map((recipe: any) => (
        <Link
          key={recipe.id}
          className="menu-link"
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </Link>
      ))}
    </nav>
  );
}

export default Menu;
