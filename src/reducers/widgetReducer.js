import {
  ADD_WIDGET,
  UPDATE_WIDGET,
  REMOVE_WIDGET,
  GET_WIDGET,
  SORT_WIDGET,
  SEARCH_WIDGET
} from '../actions'

const updateState = (state, action) => {
  const newState = state.map(function( widget ) {
    if(widget.id !== action.id) {
      return widget;
    } else {
      return action.payload;
    }
  });
  return newState;
}

const removeState = (state, action) => {
  const newState = state.filter(function( widget ) {
    return widget.id !== action.id;
  });
  return newState;
}

const addState = (state, action) => {
  return [{...action.payload}];
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
      return newState
   
    case REMOVE_WIDGET:
      newState = [...removeState(state, action)];
      return newState

    case ADD_WIDGET:
      newState = [...state, ...addState(state, action)];
      return newState

    case SORT_WIDGET:
      return [
        ...action.payload
      ]

    case SEARCH_WIDGET:
      return [
        ...action.payload
      ]

    default:
      return state
  }
}

export default widgetReducer