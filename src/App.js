import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWidgets } from './actions';
import WidgetListContainer from './containers/WidgetListContainer';
import AddWidgetContainer from './containers/AddWidgetContainer';
import MenuTools from './containers/MenuTools';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchWidgets());
  }

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
