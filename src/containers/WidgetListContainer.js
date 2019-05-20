import { connect } from 'react-redux';
import { updateWidget, removeWidget, sortWidget } from '../actions';
import WidgetListForm from '../components/WidgetListForm';
import { fetchWidgets } from '../services';

function mapStateToProps(state){
  return {
    allWidgetData: state.widgetReducer
  };
}

const mapDispatchToProps = (dispatch) => ({
   updateWidget: (index, id, updatedFields) => dispatch(updateWidget(index, id, updatedFields)),
   removeWidget: (index, id) => dispatch(removeWidget(index, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetListForm);