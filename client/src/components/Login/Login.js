import { auth } from '../../utils/firebase';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginPage = ({
   history
}) => {

   const onLoginFormSubmitHandler = (e) => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;

      auth.signInWithEmailAndPassword(email, password)
         .then((userCredential) => {
            history.push('/');
         })
         .catch(err => alert(err));
   };

   return (
      <div className="container-login">
         <i className="fa fa-user-circle icon" aria-hidden="true"></i>
         <h1>Login</h1>
         <form onSubmit={onLoginFormSubmitHandler}>
            <i className="fa fa-user a" aria-hidden="true"></i>
            <input type="text" className="text" name="email" placeholder="Email" /><br />
            <i className="fa fa-lock a" aria-hidden="true"></i>
            <input type="password" name="password" className="pass" placeholder="Password" /><br />
            <button type="submit" className="btn">Login</button>
         </form>
         <p>
            Don't have an account <Link to="/register">Register</Link> here.
         </p>
      </div>
   );
};


export default LoginPage;