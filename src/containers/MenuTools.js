import React from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import { sortedData, searchData } from '../util'
import { sortWidget, searchWidget, actionTool, reFetchWidgets } from '../actions';

class MenuTools extends React.Component {
  constructor(props) {
    super(props);
    this.asc_name = false;
    this.asc_date = false;
    this.state = { searchQuery: props.searchQuery }
    this.originalData = null;
  }

  handleAddWidget = () => {
    let show = this.props.menuAddTool.show;
    this.props.actionTool(!show);
  }

  handleSorting = (field, order) => {
    const data = sortedData(this.props.allWidgetData, field, order);
    //const data = mergeSort(this.props.allWidgetData, field, order);
    this.props.sortWidget(data);
  }

  handleSearch = (query) => {
    if(this.originalData === null) {
      this.originalData= _.clone(this.props.allWidgetData);
    }

    if(query === "") {
      this.props.reFetchWidgets();
    } else {
      const data = searchData(this.originalData, query);
      this.props.searchWidget(data);
    }
  }

  search = _.debounce((query) => {
    this.handleSearch(query)
  }, 1000)

  render() {
    return (
      <div className="row menutools">
        <h6 className="icon" onClick={() => this.handleAddWidget()}>
          Add Widget
        </h6>

        <h6>Sort by: &nbsp;</h6>
        <h6 className="icon" onClick={() => this.handleSorting("name", this.asc_name=!this.asc_name)}>
          Name
        </h6>
        <h6 className="icon" onClick={() => this.handleSorting("date", this.asc_date=!this.asc_date)}>
          Date
        </h6>
        <form className="searchInput" name="Search">
          <label><span className="friendlyHide">Search</span>
            <i className="fa fa-search"></i>
            <input
                name="search"
                type="text"
                value={this.state.searchQuery}
                onChange={(e) => {this.search(e.target.value)}}
                placeholder="Search by name or description"
            />
          </label>
        </form>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    allWidgetData: state.widgetReducer,
    menuAddTool: state.menuReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sortWidget: (data) => dispatch(sortWidget(data)),
    searchWidget: (data) => dispatch(searchWidget(data)),
    actionTool: (show) => dispatch(actionTool(show)),
    reFetchWidgets: () => dispatch(reFetchWidgets())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuTools);
