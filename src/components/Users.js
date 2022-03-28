import { Component } from "react";

import User from "./User";
import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super(); // Must call this within the state constructor
    this.state = {
      showUsers: true, // This is how we use State in class based components, state is ALWAYS an object.
    };
  }

  //Providing an error to catch using ErrorBoundary component
  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    }); // Setting state to the opposite of what it was
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
