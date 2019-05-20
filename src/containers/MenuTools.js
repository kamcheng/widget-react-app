import React from 'react'
import { connect } from 'react-redux';
import WidgetListForm from '../components/WidgetListForm';
import { sortedData } from '../util/sorting'
import { sortWidget } from '../actions';

class MenuTools extends React.Component {
  constructor(props) {
    super(props);
    this.asc_name = false;
    this.asc_date = false;
  }

  sorting = (field, order) => {
    const data = sortedData(this.props.allWidgetData, field, order);
    console.log(data)
    this.props.sortWidget(data);
  }

  render() {
    return (
      <div className="row menutools">
        Sort by: 
        <div className="icon" onClick={() => this.sorting("name", this.asc_name=!this.asc_name)}>
          <span className={"hide"}>
            { this.asc_name ? <i className="fa fa-sort-alpha-asc"></i> : <i className="fa fa-sort-alpha-desc"></i> } 
          </span>
          Name
        </div>
        <div className="icon" onClick={() => this.sorting("date", this.asc_date=!this.asc_date)}>
          <span className={"hide"}>
            { this.asc_date ? <i className="fa fa-sort-asc"></i> : <i className="fa fa-sort-desc"></i> } 
          </span>
          Date
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    allWidgetData: state.widgetReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {sortWidget: (data) => dispatch(sortWidget(data)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuTools);
