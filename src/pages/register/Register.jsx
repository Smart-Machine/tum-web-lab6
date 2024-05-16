import "./Register.css";

const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Nickname"/>
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Email" />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Password"/>
                <button className="registerButton">Register</button>
            </form>
        </div>
    );
};

export default Register;