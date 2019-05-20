import React from 'react'

const ContentEditableHOC = (WrapperComponent, updateWidget) => {
	let element = null;

	const save = (e) => {
		e.preventDefault();
		if(element) {
			const id = Number(element.getAttribute("id"));
			const index = Number(element.getAttribute("index"));
			const text = element.textContent;
			console.log(text)
			updateWidget(index, id, text);
		}
	}

	const handleKeyDown = (e) => {
		const { key } = e;
		switch (key) {
			case 'Enter':
			case ' Escape' :
			save(e);
			break;
		}
	}

	return (props) => {
		return(
			<WrapperComponent
				contentEditable = {true}
				ref = { el => element = el }
				onBlur = { save }
				onKeyDown = { handleKeyDown }
				{ ...props }
			>
				{ props.children }
			</WrapperComponent>
		)
	}
}

export default ContentEditableHOC