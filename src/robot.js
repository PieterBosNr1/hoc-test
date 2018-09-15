import React from "react";

class Robot extends React.Component {
  render() {
    return (
      <div onMouseMove={this.props.update} className="robot">
        {this.props.count} beep
      </div>
    );
  }
}

export default Robot;
