import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateWidget, removeWidget, fetchWidgets } from '../actions';
import WidgetListForm from '../components/WidgetListForm';

class WidgetListContainer extends Component {
	componentDidMount() {
		this.props.fetchWidgets();
	}

	render() {
		return (
			<WidgetListForm
				allWidgetData = { this.props.allWidgetData }
				updateWidget = { this.props.updateWidget }
				removeWidget = { this.props.removeWidget }
			/>
		)
	}
}

function mapStateToProps(state) {
  return {
    allWidgetData: state.widgetReducer
  };
}

const mapDispatchToProps = (dispatch) => ({
   updateWidget: (id, updatedFields) => dispatch(updateWidget(id, updatedFields)),
   removeWidget: (id) => dispatch(removeWidget(id)),
   fetchWidgets: () => dispatch(fetchWidgets())
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetListContainer);