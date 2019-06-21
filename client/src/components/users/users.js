import React, { useState, useEffect } from "react";
import axios from "axios";
import requiresAuth from "../auth/requiresAuth";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // CDM
    axios
      .get("/users")
      .then(res => {
        console.log(res);
        setUsers([...res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (users.length === 0) {
    return <div>Loading..</div>;
  }
  return (
    <>
      <h2>List of Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
};

export default requiresAuth(Users);
