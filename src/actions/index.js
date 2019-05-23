export const ADD_WIDGET = 'ADD_WIDGET'
export const UPDATE_WIDGET = 'UPDATE_WIDGET'
export const REMOVE_WIDGET = 'REMOVE_WIDGET'
export const GET_WIDGET = 'GET_WIDGET'
export const SORT_WIDGET = 'SORT_WIDGET'
export const SEARCH_WIDGET = 'SEARCH_WIDGET'

let nextId = 0
export const getWidget = (data, id) => {
  nextId = id + 1;
  return {
    type: GET_WIDGET,
    payload: data
  };
}

export const addWidget = (newData) => {
  return {
    type: ADD_WIDGET,
    payload: newData,
    id: nextId++
  };
}

export const updateWidget = (id, updatedFields) => ({
  type: UPDATE_WIDGET,
  payload: updatedFields,
  id: id
});

export const removeWidget = (id) => ({
  type: REMOVE_WIDGET,
  id: id
});

export const sortWidget = (newData) => ({
  type: SORT_WIDGET,
  payload: newData
});

export const searchWidget = (newData) => ({
  type: SEARCH_WIDGET,
  payload: newData
});


export const actionTool = (show) => ({
  type: 'ADD_INPUT_VISIBLE',
  show: show
});

