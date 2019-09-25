import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import UserCard from './Usercard'
import { USER_TYPE_FIELD } from '../../metaComponent'
import CheckboxContainer from '../../component/sharedComponents/Checkbox'

class Landing extends Component {
  state = {
    userList: [],
    error: '',
    slectedUserType: [0, 1, 2, 3, 4, 10],
    color: ['#48BEFF', '#3DFAFF', '#43C59E', '#3D7068', '#14453D']
  }

  // Call componentDidMount for api call
  componentDidMount() {
    // Dispatch action for getting userlist
    this.props.dispatch({ type: 'GET_USER' })
  }

  //Use shouldComponentUpdate for handling response of api's
  shouldComponentUpdate(nextProps, nextState) {
    const { userData, filteredUser } = nextProps
    const { slectedUserType } = nextState

    // Handle State change
    if (nextState !== this.state) {
      return true
    }

    // Handle filter users
    if (filteredUser !== this.props.filteredUser) {
      return true
    }

    // Handle User list data
    if (userData !== this.props.userData) {
      if (userData.status === 'success') {
        this.setState(
          {
            userList: userData.data.items
          },
          () => {
            this.props.dispatch({
              type: 'USER_FILTER',
              payload: { filter: slectedUserType, users: this.state.userList }
            })
          }
        )
      } else {
        this.setState({
          error: userData.message
        })
      }
      return true
    }
    return false
  }

  // Handle Checkboxes
  _handleChange = event => {
    const { slectedUserType } = this.state
    let userTypeValue = Number(event.target.value)
    let updatedUser = slectedUserType
    let isChecked = event.target.checked
    let containsAll = false

    // Handle checkboxes condition
    if (userTypeValue !== 10) {
      let index = updatedUser.indexOf(10)
      if (index > -1) {
        updatedUser.splice(index, 1)
      }
      if (slectedUserType.includes(userTypeValue)) {
        let index = updatedUser.indexOf(userTypeValue)
        if (index > -1) {
          updatedUser.splice(index, 1)
        }
      } else {
        let arr = [0, 1, 2, 3, 4]
        updatedUser = [...updatedUser, userTypeValue]
        containsAll = false
        if (updatedUser.length === 5) {
          containsAll = arr.every(i => updatedUser.includes(i))
          updatedUser = containsAll && [0, 1, 2, 3, 4, 10]
        }
      }
    }

    this.setState(
      {
        slectedUserType:
          userTypeValue !== 10
            ? updatedUser
            : isChecked
            ? [0, 1, 2, 3, 4, 10]
            : []
      },
      () => {
        const { slectedUserType, userList } = this.state

        // Dispatch action for filtering data
        this.props.dispatch({
          type: 'USER_FILTER',
          payload: { filter: slectedUserType, users: userList }
        })
      }
    )
  }

  render() {
    const { slectedUserType, color } = this.state
    const { filteredUser } = this.props

    return (
      <Fragment>
        <div className="page_wrapper">
          <div className="lft_sidebar">
            <div className="filter_col">
              <ul>
                {USER_TYPE_FIELD.map((data, index) => (
                  <li key={index}>
                    <CheckboxContainer
                      name={data.name}
                      value={data.value}
                      label={data.label}
                      checked={slectedUserType.includes(data.value)}
                      _handleChange={this._handleChange}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="wrapper_right">
            <div className="filter_section cstm_float">
              {filteredUser.length
                ? filteredUser.map((user, index) => (
                    <UserCard
                      key={index}
                      type={user.type}
                      email={user.email}
                      color={color}
                      wallet1={user.wallet1}
                      wallet2={user.wallet2}
                      wallet3={user.wallet3}
                      userName={user.fullName}
                    />
                  ))
                : 'No Content'}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.user.list,
  filteredUser: state.filter.list
})

export default connect(mapStateToProps)(Landing)
