import { Link } from 'react-router-dom';
import { auth } from '../../utils/firebase'
import './Register.css';



const RegisterPage = ({
    history
}) => {

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/')
            })
    }

    return (
        <div className="container-register">
            <i className="fa fa-user-circle user" aria-hidden="true"></i>
            <h1>Register</h1>
            <form onSubmit={onRegisterSubmitHandler}>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    autocomplete="off"
                /><br />
                <i className="fa fa-lock" aria-hidden="true"></i>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    autocomplete="off"
                /><br />
                <i className="fa fa-lock" aria-hidden="true"></i>
                <input
                    type="password"
                    name="pass"
                    placeholder="Repeat password"
                    autocomplete="off"
                /><br />
                <button type="submit" name="btn">Register</button>
            </form>
            <p>Have already account? <Link to="/login">Login</Link> here.</p>
        </div>
    );
}




export default RegisterPage;