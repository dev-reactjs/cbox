import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Checkboxes = ({ name, value, label, checked, _handleChange }) => (
  <Fragment>
    <label className="custom_checkbox">
      {label}
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={_handleChange}
      />{' '}
      <span className="checkmark"></span>
    </label>
  </Fragment>
)

Checkboxes.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  label: PropTypes.string,
  checked: PropTypes.bool,
  _handleChange: PropTypes.func
}

export default Checkboxes
