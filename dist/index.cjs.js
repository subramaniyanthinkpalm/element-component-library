'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var semanticUiReact = require('semantic-ui-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function HelloWorld() {
  return /*#__PURE__*/React__default['default'].createElement("h1", null, "Hello World");
}

var Button = function Button(_ref) {
  var children = _ref.children,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      basic = _ref.basic,
      disabled = _ref.disabled;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button, {
    disabled: disabled,
    basic: basic,
    className: "".concat(className, " ", "ap_".concat(color), " ").concat(size)
  }, children));
};

Button.defaultProps = {
  className: '',
  size: '',
  disabled: false,
  basic: false
};
Button.propTypes = {
  children: PropTypes__default['default'].node.isRequired,
  color: PropTypes__default['default'].string,
  size: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  disabled: PropTypes__default['default'].bool,
  basic: PropTypes__default['default'].bool
};

exports.Button = Button;
exports.HelloWorld = HelloWorld;
