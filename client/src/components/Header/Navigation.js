import { useContext } from 'react';
import { AuthContext } from '../../App';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Navigation = () => {

   const loggedInUser = useContext(AuthContext);

   return (
      <nav>
         <ul>
            <div className={style.leftSide}>
               <li><NavLink to="/">Home</NavLink></li>
               <li><NavLink to="/category/action" >Action</NavLink></li>
               <li><NavLink to="/category/horror">Horror</NavLink></li>
               <li><NavLink to="/category/comedy">Comedy</NavLink></li>
               <li><NavLink to="/category/fiction">Fiction</NavLink></li>
            </div>
            <div className={style.rightSide}>
               {loggedInUser
                  ? (<>
                     <li><NavLink to="/movie/create">Add Movie</NavLink></li>
                     <li><NavLink to="/profile"><span title="profile"><AccountBoxIcon className={style.icons} /></span></NavLink></li>
                     <li><NavLink to="/logout"><span title="logout"><ExitToAppIcon className={style.icons} /></span></NavLink></li>
                  </>
                  )
                  : (<li className={style.right}><NavLink to="/login">Sign in</NavLink></li>)
               }
            </div>
         </ul>
      </nav>
   );
}


export default Navigation;