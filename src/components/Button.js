import React from 'react';
import PropTypes from 'prop-types';
import { APButton } from 'semantic-ui-react'

const Button = ({ children,color,size, className, basic,disabled }) => {

    return (
      <>
        <APButton 
          disabled={disabled} 
          basic={basic} 
          className={`${className} ${`ap_${color}`} ${size}`}>
        { children}
        </APButton>
      </>
    )
}
button.defaultProps = {
  className:'',
  size:'',
  disabled:false,
  basic:false
};

button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size:PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  basic: PropTypes.bool
};
export default Button;