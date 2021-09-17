import React from 'react'
import { TodoContext } from '../contexts/TodoContext'

import './styles/Counter.css'

function Counter() {
	const { totalTodos, completedTodos, user } = React.useContext(TodoContext)

	return (
		<h2 className='Counter'>
			¡Hola {user}! <br />
			Hoy has completado {completedTodos} de {totalTodos} ToDo's
		</h2>
	)
}

export default Counter
