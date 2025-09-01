import React from "react";

const WithCounter = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    incrementCount = () => {
      this.setState((prev) => ({ count: prev.count + 1 }));
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  };
};

export default WithCounter;

