import './Login.css';

const LoginPage = () => {
   return (
      <div className="container-login">
         <i className="fa fa-user-circle icon" aria-hidden="true"></i>
         <h1>Login</h1>
         <form>
            <i className="fa fa-user a" aria-hidden="true"></i>
            <input type="text" className="text" placeholder="Username" /><br />
            <i className="fa fa-lock a" aria-hidden="true"></i>
            <input type="password" className="pass" placeholder="Password" /><br />
            <button type="submit" className="btn">Login</button>
         </form>
         <p>
            Don't have an account <a href="/register">Register</a> here.
    </p>
      </div>
   );
}


export default LoginPage;