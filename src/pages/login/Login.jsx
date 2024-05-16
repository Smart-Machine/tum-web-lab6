import './Login.css';

const Login = () => {
    return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input className="loginInput" type="text" placeholder="Email" />
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Password" />
            <button className="loginButton">Login</button>
        </form>
    </div>
    );
};

export default Login;