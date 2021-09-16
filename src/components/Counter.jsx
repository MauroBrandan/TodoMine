import React from 'react'
import { TodoContext } from '../contexts/TodoContext'

import './styles/Counter.css'

function Counter() {
	const { totalTodos, completedTodos } = React.useContext(TodoContext)

	return (
		<h2 className='Counter'>
			Has completado {completedTodos} de {totalTodos} TODOs
		</h2>
	)
}

export default Counter
