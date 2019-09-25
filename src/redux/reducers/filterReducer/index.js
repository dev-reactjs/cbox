export default function reducer(
  state = {
    list: []
  },
  action
) {
  switch (action.type) {
    case 'USER_FILTER_STARTED': {
      return { ...state, changingStatus: 'ongoing' }
    }
    case 'USER_FILTER_SUCCESS': {
      let userList = action.payload.data.users
      let userTypes = action.payload.data.filter
      let filterUsers = userList.filter(e => userTypes.includes(e.type))
      return { ...state, changingStatus: 'success', list: filterUsers }
    }
    case 'USER_FILTER_FAILED': {
      return { ...state, changingStatus: 'failed', list: action.payload }
    }
    case 'USER_FILTER_NET_FAILED': {
      return { ...state, changingStatus: 'netFailed', list: action.payload }
    }
    default: {
      return state
    }
  }
}
