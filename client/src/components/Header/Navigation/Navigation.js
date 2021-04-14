import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
   return (
      <nav className={style.topnav}>
         <ul>
            <NavLink to="/" className={style.moviesLink}><li>Home</li></NavLink>
            <NavLink to="/category/action" className={style.moviesLink}><li>Action</li></NavLink>
            <NavLink to="/category/horror" className={style.moviesLink}><li>Horror</li></NavLink>
            <NavLink to="/category/comedy" className={style.moviesLink}><li>Comedy</li></NavLink>
            <NavLink to="/category/fiction" className={style.moviesLink}><li>Fiction</li></NavLink>
            <NavLink to="/login" className={style.right}><li>Sign In</li></NavLink>
         </ul>
      </nav>
   );
}


export default Navigation;