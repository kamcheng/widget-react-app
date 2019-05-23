import React from 'react'
import EditableFormHOC from '../common/EditableFormHOC'
import renderer from 'react-test-renderer';
import AddWidgetForm from './AddWidgetForm'


it('AddWidgetForm renders correctly', () => {
  const formFields = {SKU: "", name: "", description:"", date: null, quantity: "", price: ""};
  const addWidget = () => {}
  const EditableForm = EditableFormHOC("form");

  const tree = renderer
    .create(
    	<EditableForm
	      addWidget = { addWidget }
	      formType = { "add" }
	      formFields = { formFields }
	    >
	    </EditableForm>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
