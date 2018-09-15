import React from "react";
const HOC = InnerComponent =>
  class extends React.Component {
    render() {
      return <InnerComponent />;
    }
  };

export default HOC;
