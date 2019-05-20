import React from 'react'
import EditableFormHOC from '../common/EditableFormHOC'

const EditableForm = EditableFormHOC("form");

const WidgetListForm = ({allWidgetData, updateWidget, removeWidget}) => {
  
  return (
    <div className="row">
        {allWidgetData.map((widget, i) => (
          <EditableForm
            key = { widget.id }
            index = {i}
            updateWidget = { updateWidget }
            removeWidget = { removeWidget }
            formType = { "update" }
            formFields = { widget }
          >
          </EditableForm>
        ))}

    </div>
  )
}


export default WidgetListForm


