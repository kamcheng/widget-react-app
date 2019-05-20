import axios from 'axios'
import {jsonData} from './jsonData'

import {
  getWidget
} from '../actions'

export const fetchWidgets = () => {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  if(localStorage.getItem("widgetStorage") === null) {
    localStorage.setItem("widgetStorage", JSON.stringify(jsonData));
  }

  return(dispatch) => {
    request.then(({data}) => {
      let items = localStorage.getItem("widgetStorage");
      items = JSON.parse(items);
      const id = items[items.length-1].id;
      dispatch(getWidget(items, id))
    })
  }
}


