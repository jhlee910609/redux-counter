import React from "react";
import "./Counter.css";
import PropTypes from "prop-types";

const Counter = ({ number, color, index, onIncrement, onDecrement, onSetColor }) => {
  return (
    <div
      className="Counter"
      onClick={()=> onIncrement(index)}
      onContextMenu={e => {
        e.preventDefault();
        onDecrement(index);
      }}
      onDoubleClick={() => onSetColor(color)}
      style={{
        backgroundColor: color
      }}
    >
      {number}
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  index: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};

Counter.defaultProps = {
  number: 0,
  index: 0,
  color: "red",
  onIncrement: () => console.log("onIncrement not defined"),
  onDecrement: () => console.log("onDecrement not defined"),
  onSetColor: () => console.log("onSetColor not defined")
};

export default Counter;
