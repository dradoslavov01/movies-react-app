import './Register.css';

const RegisterPage = () => {
    return (
        <div className="container-register">
            <i className="fa fa-user-circle user" aria-hidden="true"></i>
            <h1>Register</h1>
            <form>
                <i className="fa fa-user" aria-hidden="true"></i>
                <input
                    type="text"
                    name="text"
                    placeholder="Username"
                    autocomplete="off"
                /><br />
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <input
                    type="text"
                    name="text"
                    placeholder="E-mail"
                    autocomplete="off"
                /><br />
                <i className="fa fa-lock" aria-hidden="true"></i>
                <input
                    type="password"
                    name="pass"
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
            <p>Have already account? <a href="/login">Login</a> here.</p>
        </div>
    );
}




export default RegisterPage;