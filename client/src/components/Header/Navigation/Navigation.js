import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
   return (
      <nav className={style.topnav}>
         <ul>
            <li><NavLink to="/" className={style.moviesLink}>Home</NavLink></li>
            <li><NavLink to="/category/action" className={style.moviesLink}>Action</NavLink></li>
            <li><NavLink to="/category/horror" className={style.moviesLink}>Horror</NavLink></li>
            <li><NavLink to="/category/comedy" className={style.moviesLink}>Comedy</NavLink></li>
            <li><NavLink to="/category/thriller" className={style.moviesLink}>Тhriller</NavLink></li>

            <li className={style.right}><NavLink to="/login">Sign In</NavLink></li>
         </ul>
      </nav>
   );
}


export default Navigation;