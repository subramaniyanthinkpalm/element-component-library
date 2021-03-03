import React from 'react';
import PropTypes from 'prop-types';
import { APButton } from 'semantic-ui-react';

function HelloWorld() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello World");
}

var Button = function Button(_ref) {
  var children = _ref.children,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      basic = _ref.basic,
      disabled = _ref.disabled;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(APButton, {
    disabled: disabled,
    basic: basic,
    className: "".concat(className, " ", "ap_".concat(color), " ").concat(size)
  }, children));
};

button.defaultProps = {
  className: '',
  size: '',
  disabled: false,
  basic: false
};
button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  basic: PropTypes.bool
};

export { Button, HelloWorld };
