import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const EditableFormHOC = (WrapperComponent) => {

  return class extends React.Component {
    constructor(props) {
      super(props);
      
      this.emptyFields = {SKU: "", name: "", description:"", quantity: "", price: "", startDate: moment(new Date(), "MM/DD/YYYY HH:mm").valueOf()};

      if(this.props.formType === 'update') {
        this.state = {
          SKU: this.props.formFields.SKU,
          name: this.props.formFields.name,
          description: this.props.formFields.description,
          quantity: this.props.formFields.quantity,
          price: this.props.formFields.price,
          startDate: this.props.formFields.date ? this.props.formFields.date : new Date()
        };
      } else {
        this.state = this.emptyFields;
      }
    }

    handleDateChange = (date) => {
      this.setState({
        startDate: date
      });
    }

    handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleAdd = (event) => {
      event.preventDefault();
      this.props.addWidget({
        SKU: this.state.SKU,
        name: this.state.name,
        description: this.state.description,
        quantity: Number(this.state.quantity),
        price: Number(this.state.price),
        date: this.state.startDate
      });

      this.setState(this.emptyFields);
    }

    handleUpdate = (event) => {
      event.preventDefault();
     
      this.props.updateWidget(
        this.props.formFields.id, 
        {
          id: this.props.formFields.id,
          SKU: this.state.SKU,
          name: this.state.name,
          description: this.state.description,
          quantity: Number(this.state.quantity),
          price: Number(this.state.price),
          date: this.state.startDate instanceof Date ? 
                moment(this.state.startDate, "MM/DD/YYYY HH:mm").valueOf() : 
                this.state.startDate
        }
      );
    }

    handleDelete = (event) => {
      event.preventDefault();
      this.props.removeWidget(this.props.formFields.id);
    }

    renderButton = () => {
      if(this.props.formType === 'update') {
        return (
          <div className="form-group">
            <button aria-label="Update Widget" type="button" className="btn btn-primary btn-sm" onClick={this.handleUpdate}>Update</button>
            <button aria-label="Remove Widget" type="button" className="btn btn-primary btn-sm" onClick={this.handleDelete}>Delete</button>
          </div>
        )
      } else {
         return (
          <div className="form-group">
            <button aria-label="Add Widget" type="button" className="btn btn-primary btn-sm" onClick={this.handleAdd}>Add</button>
          </div>
        ) 
      }
    }

    render() {
      return (
        <div className="col-md-6 col-lg-4 col-xl-3 boxStyle">
          <WrapperComponent>
            <div className="form-group">
              {this.props.formFields && this.props.formFields.id ? 
                (<label>ID: {this.props.formFields.id}</label>) : ""}

              <label>SKU:
                <input type="text" name="SKU" value={this.state.SKU} className="form-control" onChange={this.handleChange} />
              </label>

              <label>Name:
                <input type="text" name="name" value={this.state.name} className="form-control" onChange={this.handleChange} />
              </label>

              <label>Description:
                <input type="text" name="description" value={this.state.description} className="form-control" onChange={this.handleChange} />
              </label>

              <label>Quantity:
                <input type="text" name="quantity" value={this.state.quantity} className="form-control" onChange={this.handleChange} />
              </label>

              <label>Price:
                <input type="text" name="price" value={this.state.price} className="form-control" onChange={this.handleChange} />
              </label>

              <label>Manufacturing Date:
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleDateChange}
                />
              </label>
            </div>
            {this.renderButton()}
          </WrapperComponent>
        </div>
      );
    }
  }
}

export default EditableFormHOC