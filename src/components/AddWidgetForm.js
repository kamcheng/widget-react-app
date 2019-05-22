import React from 'react'
import EditableFormHOC from '../common/EditableFormHOC'

const EditableForm = EditableFormHOC("form");

const AddWidgetForm = ({addWidget, menuAddTool}) => {
  const formFields = {SKU: "", name: "", description:"", date: "", quantity: "", price: ""};
  return menuAddTool.show ? (
    <EditableForm
      addWidget = { addWidget }
      formType = { "add" }
      formFields = { formFields }
    >
    </EditableForm>
  ) : null
}

export default AddWidgetForm


