import './Profile.css'
import { useContext } from 'react';
import { AuthContext } from '../../App';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const ProfilePage = () => {

   const user = useContext(AuthContext);

   return (
      <div className="profile_container">
         <div className="profile_content">
            <h2>Welcome, {user != null ? user.email.slice(0, -7) : ''}</h2>
            <AccountCircleIcon className="profile_icon" />
            <div className="profile_links">
               <Link to="#" >Favorite movies</Link>
               <Link to="#" >Added movies</Link>
            </div>
            <div className="social_media_icons">
               <FacebookIcon />
               <InstagramIcon />
               <TwitterIcon />
            </div>
         </div>
      </div>
   );
};


export default ProfilePage;