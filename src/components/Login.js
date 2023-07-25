import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          //   "x-api-key": "zDBeazcy5ve6qzMsVJWY8Jm2rd70D43R",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setToken(data.token);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
      {token && (
        <div className="mt-3">
          <h4>Login successful!</h4>
          <p>Your auth token: {token}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
