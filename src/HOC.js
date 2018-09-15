import React from "react";
const HOC = InnerComponent =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { count: 0 };
    }
    update() {
      this.setState({ count: this.state.count + 2 });
    }
    render() {
      return (
        <InnerComponent
          update={this.update.bind(this)}
          {...this.props}
          {...this.state}
        />
      );
    }
  };

export default HOC;
