import React from 'react'
import EditableFormHOC from '../common/EditableFormHOC'

const EditableForm = EditableFormHOC("form");

const AddWidgetForm = ({addWidget, menuAddTool}) => {
  
  return menuAddTool.show ? (
    <EditableForm
      addWidget = { addWidget }
      formType = { "add" }
    >
    </EditableForm>
  ) : null
}

export default AddWidgetForm


