import { Fragment, Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Qasim" },
  { id: "u2", name: "Idris" },
  { id: "u3", name: "Catherine" },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  // Lifecycle Method - componentDidMount is a UseEffect alternative typically for API fetch requests, it only runs once!
  componentDidMount() {
    //send http requests..
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  // Lifecycle Method - componentDidUpdate is useEffect with a changing dependancy!
  componentDidUpdate(prevProps, prevState) {
    // If the search term is DIFFERENT from the last search term, this prevents an infinite loop.
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  // Lifecycle Method - componentWillUnmount is essentially the useEffect cleanup function!
  componentWillUnmount() {
    console.log("User Will unmount!");
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
