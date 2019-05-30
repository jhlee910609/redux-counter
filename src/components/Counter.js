import React from "react";
import "./Counter.css";
import PropTypes from "prop-types";

const Counter = ({ number, color, onIncrement, onDecrement }) => {
  return (
    <div
      className="Counter"
      onClick={onIncrement}
      onContextMenu={e => {
        e.preventDefault();
        onDecrement();
      }}
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
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
};

Counter.defaultProps = {
  number: 0,
  color: "red",
  onIncrement: () => console.log("onIncrement not defined"),
  onDecrement: () => console.log("onDecrement not defined")
};

export default Counter;
