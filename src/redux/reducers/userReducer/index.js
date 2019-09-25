export default function reducer(
  state = {
    list: []
  },
  action
) {
  switch (action.type) {
    case 'GET_USER_STARTED': {
      return { ...state, changingStatus: 'ongoing' }
    }
    case 'GET_USER_SUCCESS': {
      return { ...state, changingStatus: 'success', list: action.payload }
    }
    case 'GET_USER_FAILED': {
      return { ...state, changingStatus: 'failed', list: action.payload }
    }
    case 'GET_USER_NET_FAILED': {
      return { ...state, changingStatus: 'netFailed', list: action.payload }
    }
    default: {
      return state
    }
  }
}
