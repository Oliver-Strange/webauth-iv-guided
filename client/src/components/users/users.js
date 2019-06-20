import React from "react";
import axios from "axios";
import requiresAuth from "../auth/requiresAuth";

class Users extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("/users")
      .then(res => {
        console.log(res);
        this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.users.length === 0) {
      return <div>Loading..</div>;
    }
    return (
      <>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default requiresAuth(Users);
