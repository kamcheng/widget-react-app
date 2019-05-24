import React, { Component } from 'react';
import { connect } from 'react-redux';
import WidgetListContainer from './containers/WidgetListContainer';
import AddWidgetContainer from './containers/AddWidgetContainer';
import MenuTools from './containers/MenuTools';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <MenuTools />
        <AddWidgetContainer />
        <WidgetListContainer />
      </div>
    )
  }
}

export default connect()(App);
