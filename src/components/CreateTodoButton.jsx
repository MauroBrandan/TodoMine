import React from 'react'

import './styles/CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
	const handleClick = () => {
		setOpenModal(true)
	}

	return (
		<button onClick={handleClick} className='CreateTodoButton'>
			+
		</button>
	)
}

export default CreateTodoButton
