import React from "react";

function Dog(props) {
  return (
    <div className="dog" onClick={props.update}>
      woef {props.count}
    </div>
  );
}

export default Dog;
