import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { label, type, value, id, onChange, className } = props;
  return (
    <label htmlFor={ id }>
      <span className="sr-only">
      </span>
      <input
        type={ type }
        value={ value }
        id={ id }
        onChange={ onChange }
        className={ className }
        placeholder={ label }
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  testId: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  type: 'text',
  testId: '',
  id: '',
  className: '',
};

export default Input;
