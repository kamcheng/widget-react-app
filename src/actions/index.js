import axios from 'axios'
export const ADD_WIDGET = 'ADD_WIDGET'
export const UPDATE_WIDGET = 'UPDATE_WIDGET'
export const REMOVE_WIDGET = 'REMOVE_WIDGET'
export const GET_WIDGET = 'GET_WIDGET'
export const SORT_WIDGET = 'SORT_WIDGET'
export const SEARCH_WIDGET = 'SEARCH_WIDGET'

const serviceURL = "http://localhost:3000";

export const fetchWidgets = () => {
  const request = axios.get(serviceURL+'/widgets');
  return(dispatch) => {
    request.then(({data}) => {
      dispatch(getWidget(data))
    })
  }
}

export const addWidget = (newData) => {
  return (dispatch) => {
    return axios.post(serviceURL+'/widgets', newData)
      .then(response => {
        dispatch(addWidgetSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const updateWidget = (id, newData) => {
  return (dispatch) => {
    return axios.put(serviceURL+'/widgets/'+id, newData)
      .then(response => {
        dispatch(updateWidgetSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const removeWidget = (id, newData) => {
  return (dispatch) => {
    return axios.delete(serviceURL+'/widgets/'+id)
      .then(response => {
        dispatch(removeWidgetSuccess(id))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const reFetchWidgets = (newData) => {
  return (dispatch) => {
    return axios.get(serviceURL+'/widgets')
      .then(response => {
        dispatch(searchWidget(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getWidget = (data) => {
  return {
    type: GET_WIDGET,
    payload: data
  };
}

export const addWidgetSuccess = (newData) => {
  return {
    type: ADD_WIDGET,
    payload: newData
  };
}

export const updateWidgetSuccess = (updatedData) => ({
  type: UPDATE_WIDGET,
  payload: updatedData
});

export const removeWidgetSuccess = (id) => ({
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

