import React, {useState} from "react";


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword]= useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLoginSubmit = (event) =>
    {
        event.preventDefault();

    }
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLoginSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    className="form-control"
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="form-control"
                    />
                </div>
                <button type="submit" className="submitbtn">Login</button>
            </form>
        </div>
    );
}
export default LoginPage;
