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

const Button = ({
  children,
  color,
  size,
  className,
  basic,
  disabled
}) => {
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button, {
    disabled: disabled,
    basic: basic,
    className: `${className} ${`ap_${color}`} ${size}`
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const Dropdown = props => {
  const {
    labelText = "Select",
    options,
    iconType,
    search,
    color,
    calendar,
    openDropdown,
    dropdownHandle,
    inputHandle
  } = props;
  let minutes = [];

  for (let i = 1; i <= 60; i++) {
    minutes.push(i);
  }

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, props.addtask ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, _extends({
    labeled: true,
    text: labelText,
    icon: "plus circle",
    className: "icon ap_form_dropdown custom"
  }, openDropdown ? {
    open: true
  } : {}), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, {
    className: `${props.large ? 'large' : props.medium ? 'medium' : 'small'}`
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Input, {
    icon: "search",
    iconPosition: "left",
    placeholder: "Name Task",
    className: "search",
    onClick: () => inputHandle()
  }), props.title && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ap_header"
  }, props.title.map((titleText, index) => /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Header, {
    key: index,
    content: titleText.content,
    className: `${titleText.class}`
  }))), props.items.map((item, index) => {
    let iconsRender = item.icon ? item.icon : '';
    return /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, {
      key: index,
      text: `${item.text}`,
      icon: iconsRender
    });
  }))) : props.notification ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ui dropdown ap_notification notification"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "menu transition visible"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "title"
  }, "Notifications"), props.data.map(notify => /*#__PURE__*/React__default['default'].createElement("div", {
    className: "list"
  }, /*#__PURE__*/React__default['default'].createElement("p", {
    className: "date_time"
  }, notify.date, ", ", notify.time), /*#__PURE__*/React__default['default'].createElement("p", {
    className: "description"
  }, notify.description, " ", /*#__PURE__*/React__default['default'].createElement("span", null, notify.taskname)))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "view_more"
  }, "View More"))) : props.template ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ui dropdown ap_form_dropdown custom"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    "aria-atomic": "true",
    "aria-live": "polite",
    role: "alert",
    className: "divider text",
    onClick: () => props.onClickEvent()
  }, props.labelText), /*#__PURE__*/React__default['default'].createElement("i", {
    "aria-hidden": "true",
    className: "plus circle icon"
  }), props.templateOpen && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "menu transition visible small"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ui input ap_input grey"
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    placeholder: "Name Task",
    type: "text",
    value: props.inputText,
    onChange: e => props.inputEvent(e),
    autoFocus: true
  })), props.showButton && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "task_btns"
  }, /*#__PURE__*/React__default['default'].createElement("button", {
    className: "ui button cancel",
    onClick: props.cancelEvent
  }, "Cancel"), /*#__PURE__*/React__default['default'].createElement("button", {
    className: "ui button add",
    onClick: props.addEvent
  }, "Add Task")), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "select_option"
  }, "Or Select Task Template"), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ap_header"
  }, props.title.map((header, index) => /*#__PURE__*/React__default['default'].createElement("div", {
    key: index,
    className: `header ${header.value === props.dropdownHeaderValue ? 'active' : ''}`,
    onClick: () => props.headerTemplateEvent(header.value)
  }, header.content))), props.title.find(item => item.value === props.dropdownHeaderValue).items.map((headerContent, index) => /*#__PURE__*/React__default['default'].createElement("div", {
    role: "option",
    className: "item",
    key: index,
    onClick: () => props.templateValueEvent(headerContent.value)
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "text"
  }, headerContent.text))))) : props.text ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, _extends({
    text: labelText,
    icon: "angle down",
    className: `ap_custom_text_dropdown ${props.line ? 'line' : ''}`
  }, props.line ? {
    options: options
  } : {}, {
    onChange: props.dropdownHandle
  }), !props.line ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, null, options && options.map((item, index) => /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, {
    text: item.text,
    key: index,
    onClick: () => props.itemEvent(item.value)
  }))) : null) : props.color ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ap_form_dropdown color"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    role: "listbox",
    "aria-expanded": "false",
    className: "ui button dropdown icon medium",
    onClick: () => props.openColorMenu()
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    "aria-atomic": "true",
    "aria-live": "polite",
    role: "alert",
    className: "divider text"
  }, "Please Select"), /*#__PURE__*/React__default['default'].createElement("i", {
    "aria-hidden": "true",
    className: "angle down icon"
  }), props.openDropdown && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "menu transition"
  }, props.options.map(option => /*#__PURE__*/React__default['default'].createElement("div", {
    className: `field ap_dropdown_color ap_dropdown_color_${option.value} `,
    onClick: () => props.itemEvent(option.value)
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ui checked fitted checkbox"
  }, /*#__PURE__*/React__default['default'].createElement("input", _extends({
    className: "hidden",
    type: "checkbox",
    value: ""
  }, option.value === props.selected ? {
    checked: true
  } : {}, {
    onChange: () => props.itemEvent(option.value)
  })), /*#__PURE__*/React__default['default'].createElement("label", null))))))) : props.customform ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Form, {
    className: `ap_form_dropdown customform ${props.scroll ? 'scroll' : ''} ${props.minutes ? 'minutes' : ''}`
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Form.Field, {
    className: `${props.large ? 'large' : props.medium ? 'medium' : 'small'}`
  }, !props.nolabel && props.labelText && /*#__PURE__*/React__default['default'].createElement("label", null, " ", props.labelText, " "), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, _extends({
    text: props.defaultText ? props.defaultText : "Please Select",
    button: true,
    className: `icon ${props.large ? 'large' : props.medium ? 'medium' : 'small'}`,
    icon: "angle down"
  }, props.openDropdownEvent ? {
    open: props.openDropdownEvent
  } : {}), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, {
    className: `${props.large ? 'large' : props.medium ? 'medium' : 'small'}`
  }, props.minutes && minutes.length && minutes.map((minute, index) => /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, {
    key: index,
    text: minute,
    onClick: () => props.itemEvent(minute)
  })), props.options && props.options.map((item, index) => {
    let iconsRender = item.icon ? item.icon : '';
    return /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, {
      key: index,
      text: `${item.text}`,
      icon: iconsRender,
      onClick: () => props.itemEvent(item.value)
    });
  }))))) : props.form ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Form, {
    className: "ap_form_dropdown form"
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Form.Field, {
    className: `${props.large ? 'large' : props.medium ? 'medium' : 'small'}`
  }, props.labelText && /*#__PURE__*/React__default['default'].createElement("label", null, " ", props.labelText, " "), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, _extends({
    text: props.defaultText ? props.defaultText : "Please Select",
    button: true,
    className: `icon ${props.large ? 'large' : props.medium ? 'medium' : 'small'}`,
    icon: "angle down"
  }, props.openDropdownEvent ? {
    open: props.openDropdownEvent
  } : {}), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, {
    className: `${props.large ? 'large' : props.medium ? 'medium' : 'small'}`
  }, props.title && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ap_header"
  }, props.title.map((titleText, index) => /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Header, {
    key: index,
    content: titleText.content,
    className: `${titleText.value === props.dropdownHeaderValue ? 'active' : ''}`,
    onClick: () => props.headerTemplateEvent(titleText.value)
  }))), props.title.find(item => item.value === props.dropdownHeaderValue).items.map((headerContent, index) => {
    return /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, {
      key: index,
      text: `${headerContent.text}`,
      onClick: () => props.templateValueEvent(headerContent.value)
    });
  }))))) : props.image ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button.Group, {
    className: `
                                ${props.active ? 'active' : props.disabled ? 'disabled' : ''}
                                ${props.icon || props.show ? 'ap_icon_dropdown' : props.color ? 'ap_custom_color_dropdown' : 'ap_dropdown'} 
                                ${props.medium ? 'medium' : 'small'} 
                                ${props.bg_white ? 'bg_white' : ''} 
                                ${props.type === 'dots' || props.show ? 'light_green' : ''}    
                                ${calendar ? 'calendar' : ''}
                                ${props.image ? 'image' : props.input ? 'input' : ''}
                            `
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, {
    className: `button icon ${props.show ? 'remove_icon' : ''}`,
    floating: true,
    trigger: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null),
    open: true
  }, /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, null, props.input && /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Input, {
    icon: "search",
    iconPosition: "left",
    className: "search ap_input grey",
    value: props.inputText,
    onClick: () => props.stayOpenEvent(),
    onChange: e => props.inputEvent(e),
    autoFocus: true
  }), options.map(option => /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, _extends({
    key: option.value
  }, option, {
    onClick: () => props.itemEvent(option.value)
  })))))) : props.custom ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button.Group, {
    className: ` ${props.icon ? 'ap_icon_dropdown' : 'ap_dropdown'} 
                            ${props.active ? 'active' : props.disabled ? 'disabled' : ''}
                            ${props.medium ? 'medium' : 'small'} ${props.filter ? 'sort_dropdown' : ''} `
  }, labelText && /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button, null, labelText), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, _extends({
    className: "button icon",
    floating: true,
    trigger: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null)
  }, props.openDropdown ? {
    open: props.openDropdown
  } : {}), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, null, options && options.map((option, index) => {
    return /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, _extends({
      text: option.text,
      key: index,
      value: option.value,
      onClick: props.dropdownHandle
    }, option.icon ? {
      icon: option.icon
    } : {}, {
      className: ` ${option.active ? 'active' : ''}`
    }));
  })))) : props.search ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button.Group, {
    className: `
                            ${props.active ? 'active' : props.disabled ? 'disabled' : ''}
                            ${props.icon || props.show ? 'ap_icon_dropdown' : props.color ? 'ap_custom_color_dropdown' : 'ap_dropdown'} 
                            ${props.medium ? 'medium' : 'small'} 
                        `,
    onClick: props.onClickEvent
  }, labelText && /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button, null, labelText), /*#__PURE__*/React__default['default'].createElement("div", {
    role: "listbox",
    "aria-expanded": "true",
    className: "ui active visible floating dropdown button icon remove_icon",
    tabindex: "0"
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    "aria-hidden": "true",
    className: "dropdown icon"
  }), openDropdown && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "visible menu transition"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "ui left icon input search ap_input grey"
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    type: "text",
    value: props.inputText,
    onChange: e => props.inputEvent(e)
  }), /*#__PURE__*/React__default['default'].createElement("i", {
    "aria-hidden": "true",
    className: "search icon"
  })), props.options.map(option => /*#__PURE__*/React__default['default'].createElement("div", {
    role: "option",
    className: `${option.icon === 'check circle' ? 'selected' : ''} item`,
    onClick: () => props.itemEvent(option.value)
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    "aria-hidden": "true",
    className: `${option.icon} icon`
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "text"
  }, option.text)))))) : /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button.Group, {
    className: `
                            ${props.active ? 'active' : props.disabled ? 'disabled' : ''}
                            ${props.icon || props.show ? 'ap_icon_dropdown' : props.color ? 'ap_custom_color_dropdown' : 'ap_dropdown'} 
                            ${props.medium ? 'medium' : 'small'} 
                            ${props.bg_white ? 'bg_white' : ''} 
                            ${props.type === 'dots' || props.show ? 'light_green' : ''}    
                            ${calendar ? 'calendar' : ''}
                        `
  }, labelText && /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Button, null, labelText), /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown, _extends({
    className: `button icon ${props.show ? 'remove_icon' : ''}`,
    floating: true,
    trigger: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null),
    onChange: props.dropdownHandle
  }, search || color || props.image ? {} : {
    options: options
  }, props.type ? {
    icon: "ellipsis horizontal"
  } : {}, openDropdown || props.show ? {
    open: true
  } : {}, props.disabled ? {
    disabled: true
  } : ''), search || calendar ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, null, search && /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Input, {
    icon: "search",
    iconPosition: "left",
    className: "search ap_input grey",
    value: props.inputText,
    onClick: () => props.stayOpenEvent(),
    onChange: e => props.inputEvent(e),
    autoFocus: true
  }), options && options.map((option, index) => {
    return option.type !== 'undefined' && option.type === 'label' ? /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Header, {
      content: option.text
    }) : /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Item, _extends({
      text: option.text,
      key: index,
      value: option.value,
      onClick: dropdownHandle
    }, option.icon ? {
      icon: option.icon
    } : {}, {
      className: ` ${option.active ? 'active' : ''}`
    }));
  })) : color && /*#__PURE__*/React__default['default'].createElement(semanticUiReact.Dropdown.Menu, null, options && options.map(color => {
    let checked1 = color.value === 'red' ? {
      checked: true
    } : '';
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: `field ap_dropdown_color ap_dropdown_color_${color.value}`,
      onClick: () => props.itemEvent(color.value)
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "ui checked fitted checkbox"
    }, /*#__PURE__*/React__default['default'].createElement("input", _extends({
      className: "hidden",
      readonly: "",
      type: "checkbox",
      value: ""
    }, checked1, {
      onChange: () => props.itemEvent(color.value)
    })), /*#__PURE__*/React__default['default'].createElement("label", null)));
  })))));
};

exports.Button = Button;
exports.Dropdown = Dropdown;
exports.HelloWorld = HelloWorld;
