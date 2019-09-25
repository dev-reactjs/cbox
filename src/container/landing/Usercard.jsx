import React from 'react'
import PropTypes from 'prop-types'
import * as commonHelper from '../../utils/helper'

const UserCardDetail = ({
  userName,
  email,
  wallet1,
  wallet2,
  wallet3,
  index,
  type,
  color
}) => (
  <div
    className="filter_card"
    style={{
      borderLeft: `6px solid ${commonHelper._handleCardColor(type, color)}`
    }}
    key={index}
  >
    <div className="filter_col_data">
      <h4>{userName}</h4>
      <p>{email}</p>

      <div className="filter_circle">
        <ul>
          <li>
            <span className="blue_gradient">{wallet1}</span>
            <p>Wallet 1</p>
          </li>
          <li>
            <span className="purple_gradient">{wallet2}</span>
            <p>Wallet 2</p>
          </li>
          <li>
            <span className="orng_gradient">{wallet3}</span>
            <p>Wallet 3</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

UserCardDetail.propTypes = {
  userName: PropTypes.string,
  email: PropTypes.string,
  wallet1: PropTypes.number,
  wallet2: PropTypes.number,
  wallet3: PropTypes.number,
  index: PropTypes.number,
  type: PropTypes.number,
  color: PropTypes.array
}
export default UserCardDetail
