import React from 'react'
import { TodoContext } from '../contexts/TodoContext'

import './styles/CreateTodoButton.css'

function CreateTodoButton() {
	const { setOpenModal } = React.useContext(TodoContext)

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
