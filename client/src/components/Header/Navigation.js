import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = ({
   isLoggedIn
}) => {
   return (
      <nav className={style.topnav}>
         <ul>
            <li><NavLink to="/" className={style.moviesLink}>Home</NavLink></li>
            <li><NavLink to="/category/action" className={style.moviesLink}>Action</NavLink></li>
            <li><NavLink to="/category/horror" className={style.moviesLink}>Horror</NavLink></li>
            <li><NavLink to="/category/comedy" className={style.moviesLink}>Comedy</NavLink></li>
            <li><NavLink to="/category/fiction" className={style.moviesLink}>Fiction</NavLink></li>
            {isLoggedIn
               ? (<>
                  <li className={style.right}><NavLink to="/logout">Logout</NavLink></li>
                  <li className={style.right}>Welcome, {isLoggedIn.email}</li>
                  <li className={style.right}><NavLink to="/movie/create">Add Movie</NavLink></li>
               </>
               )
               : (<li className={style.right}><NavLink to="/login">Sign in</NavLink></li>)
            }

         </ul>
      </nav>
   );
}


export default Navigation;