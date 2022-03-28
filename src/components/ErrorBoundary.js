import { Component } from "react";

// Settinng up an error boundry
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  //  Using componentDidCatch to catch the error and return anything we want when an thrown error is triggered
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something Went Wrong!!</p>;
    }
    return this.proper.children;
  }
}

export default ErrorBoundary;
