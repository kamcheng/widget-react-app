
const menuReducer = (state = {'show': false}, action) => {
  switch (action.type) {
    case 'ADD_INPUT_VISIBLE':
      return {
        ...state,
        ...{show: action.show}
      }

    default:
      return state
  }
}

export default menuReducer