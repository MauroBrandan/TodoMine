import React from 'react'

import './styles/Counter.css'

function Counter({ totalTodos, completedTodos, user }) {
	return (
		<h2 className='Counter'>
			¡Hola {user}! <br />
			Hoy has completado {completedTodos} de {totalTodos} ToDo's
		</h2>
	)
}

export default Counter
