import { connect } from 'react-redux';
import { addWidget } from '../actions';
import AddWidgetForm from '../components/AddWidgetForm';


const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({
   addWidget: (newWidget) => dispatch(addWidget(newWidget))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWidgetForm);