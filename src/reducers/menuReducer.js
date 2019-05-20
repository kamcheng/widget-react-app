
const menuReducer = (state = [], action) => {
  switch (action.type) {
    case 'SORT_ASC_DES':
      return [
        ...state,
        ...action.asc
      ]

    default:
      return state
  }
}

export default menuReducer