import {
  ADD_WIDGET,
  UPDATE_WIDGET,
  REMOVE_WIDGET,
  GET_WIDGET,
  SORT_WIDGET
} from '../actions'

const updateState = (state, action) => {
   const widget = state[action.index];
   if(widget.id !== action.id) {
     //based on the action.id check the whole list
   } else {//fruits.splice(2, 1, "Lemon");
     state.splice(action.index, 1, action.payload);
   }
   return state;
}

const removeState = (state, action) => {
   const widget = state[action.index];
   if(widget.id !== action.id) {
     //based on the action.id check the whole list
   } else {
     state.splice(action.index, 1);
   }
   return state;
}

const addState = (state, action) => {
  return [{...action.payload, ...{id: action.id}}];
}

let newState = [];

const widgetReducer = (state = [], action) => {
  switch (action.type) {
    case GET_WIDGET:
      return [
        ...state,
        ...action.payload
      ]

    case UPDATE_WIDGET:
      newState = [...updateState(state, action)];
      localStorage.setItem("widgetStorage", JSON.stringify(newState));
      return newState
   
    case REMOVE_WIDGET:
      newState = [...removeState(state, action)];
      localStorage.setItem("widgetStorage", JSON.stringify(newState));
      return newState

    case ADD_WIDGET:
      newState = [...state, ...addState(state, action)];
      localStorage.setItem("widgetStorage", JSON.stringify(newState));
      return newState

    case SORT_WIDGET:
      return [
        ...action.payload
      ]

    default:
      return state
  }
}

export default widgetReducer