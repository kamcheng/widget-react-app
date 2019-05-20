export const ADD_WIDGET = 'ADD_WIDGET'
export const UPDATE_WIDGET = 'UPDATE_WIDGET'
export const REMOVE_WIDGET = 'REMOVE_WIDGET'
export const GET_WIDGET = 'GET_WIDGET'
export const SORT_WIDGET = 'SORT_WIDGET'

let nextId = 0
export const getWidget = (data, id) => {
  nextId = id;
  return {
    type: GET_WIDGET,
    payload: data
  };
}

export const addWidget = (newData) => {
  return {
    type: ADD_WIDGET,
    payload: newData,
    id: ++nextId
  };
}

export const updateWidget = (index, id, updatedFields) => ({
  type: UPDATE_WIDGET,
  payload: updatedFields,
  index: index,
  id: id
});

export const removeWidget = (index, id) => ({
  type: REMOVE_WIDGET,
  id: id,
  index: index
});

export const sortWidget = (newData) => ({
  type: SORT_WIDGET,
  payload: newData
});


export const actionTool = (asc) => ({
  type: 'SORT_ASC_DES',
  asc: asc
});

