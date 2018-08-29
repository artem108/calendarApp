 const LOGIN = 'LOGIN'
 const LOGOUT = 'LOGOUT'

const initialState = {
  load: false,
  logged: Boolean(localStorage.getItem('logged'))

}

export function login() {
  localStorage.setItem('logged', true)
    return dispatch => {
        dispatch({ type: LOGIN })

    }
}

export function logOut() {
  localStorage.setItem('logged', false)
    return dispatch => {
        dispatch({ type: LOGOUT })
    }
}

export default function viewer(state = initialState, action) {
    switch (action.type) {
    case LOGIN:
      return {
        load: false,
        logged: Boolean(localStorage.getItem('logged'))
      }
    case LOGOUT:
      return {
        ...initialState,
        logged: false
      }
    default:
      return state
  }
}
