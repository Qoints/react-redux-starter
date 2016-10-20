import React from "react";

const Button = ({children, onClick}) => (
  <button onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func
};

export default Button;
