import React from 'react'
import EditableFormHOC from '../common/EditableFormHOC'

const EditableForm = EditableFormHOC("form");

const AddWidgetForm = ({addWidget}) => {
  const formFields = {SKU: "", name: "", description:"", date: "", quantity: "", price: ""};
  return (
    <EditableForm
      addWidget = { addWidget }
      formType = { "add" }
      formFields = { formFields }
    >
    </EditableForm>
  )
}

export default AddWidgetForm


