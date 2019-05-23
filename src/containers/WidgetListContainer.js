import { connect } from 'react-redux';
import { updateWidget, removeWidget, sortWidget } from '../actions';
import WidgetListForm from '../components/WidgetListForm';
import { fetchWidgets } from '../services';

function mapStateToProps(state) {
  return {
    allWidgetData: state.widgetReducer
  };
}

const mapDispatchToProps = (dispatch) => ({
   updateWidget: (id, updatedFields) => dispatch(updateWidget(id, updatedFields)),
   removeWidget: (id) => dispatch(removeWidget(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetListForm);