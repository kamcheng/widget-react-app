import React from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import WidgetListForm from '../components/WidgetListForm';
import { sortedData, mergeSort, searchWidgets } from '../util'
import { sortWidget } from '../actions';

class MenuTools extends React.Component {
  constructor(props) {
    super(props);
    this.asc_name = false;
    this.asc_date = false;
    console.log(props)
    this.state = { searchQuery: props.searchQuery }
    this.originalData = null;
  }


  handleSorting = (field, order) => {
    //const data = sortedData(this.props.allWidgetData, field, order);
    const data = mergeSort(this.props.allWidgetData, field, order);
    this.props.sortWidget(data);
  }

  handleSearch = (query) => {
    if(this.originalData === null) {
      this.originalData= _.clone(this.props.allWidgetData);
    }

    if(query == "") {
      this.props.sortWidget(this.originalData);
    } else {
      const data = searchWidgets(this.originalData, query);
      this.props.sortWidget(data);
    }
  }

  search = _.debounce((query) => {
    this.handleSearch(query)
  }, 1000)

  render() {
    return (
      <div className="row menutools">
        Sort by:&nbsp;  
        <div className="icon" onClick={() => this.handleSorting("name", this.asc_name=!this.asc_name)}>
          <span className={"hide"}>
            { this.asc_name ? <i className="fa fa-sort-alpha-asc"></i> : <i className="fa fa-sort-alpha-desc"></i> } 
          </span>
          Name
        </div>
        <div className="icon" onClick={() => this.handleSorting("date", this.asc_date=!this.asc_date)}>
          <span className={"hide"}>
            { this.asc_date ? <i className="fa fa-sort-asc"></i> : <i className="fa fa-sort-desc"></i> } 
          </span>
          Date
        </div>
        <div className="searchInput">
          <input
              type="text"
              value={this.state.searchQuery}
              onChange={(e) => {this.search(e.target.value)}}
              placeholder="Search by title or author"
          />
          <i className="fa fa-search"></i>
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
