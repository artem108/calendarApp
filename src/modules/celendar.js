const LOAD_CELENDAR = 'LOAD_CELENDAR'
const ADD_EVENT = 'ADD_EVENT'
const DELETE_EVENT = 'DELETE_EVENT'

const initialState = {
   month: new Date().getMonth(),
   days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
   months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
   dayInMonths: 32 - new Date(new Date().getFullYear(), new Date().getMonth(), 32).getDate(),
   daysWithEvents: []
}

export function loadCelendar() {
   return dispatch => {
       dispatch({ type: LOAD_CELENDAR })
   }
}

export function addEvent(data) {
   return dispatch => {
       dispatch({
         type: ADD_EVENT,
         payload: data
       })
   }
}

export function eventDelete(day) {
  return dispatch => {
      dispatch({
        type: DELETE_EVENT,
        payload: day
      })
  }
}

export default function viewer(state = initialState, action) {
   switch (action.type) {
   case LOAD_CELENDAR:
     return {
       ...state
     }
   case ADD_EVENT:
     return {
       ...state,
       daysWithEvents: state.daysWithEvents.concat([action.payload]),
      }
  case DELETE_EVENT:
    state.daysWithEvents.map((item, index) => {
        if (item[action.payload])
          state.daysWithEvents.splice(index, 1)
    })
    return {
      ...state
    }
   default:
    return state
  }
}
