import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    // console.log(e.target.name);
    // e.persist();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    // console.log(e.target);
    e.preventDefault();
    axios
      .post("/auth/login", credentials)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        props.history.push("/users");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          onChange={handleChange}
          value={credentials.username}
          name="username"
          id="username"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          value={credentials.password}
          name="password"
          id="password"
          type="password"
        />
      </div>
      <div>
        <button type="submit"> Login </button>
      </div>
    </form>
  );
};

export default Login;
