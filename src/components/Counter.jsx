import React from 'react'

import './styles/Counter.css'

function Counter({ totalTodos, completedTodos, user, loading }) {
	return (
		<h2 className={`Counter ${loading && 'Counter--disabled'}`}>
			¡Hola {user}! <br />
			Hoy has completado {completedTodos} de {totalTodos} ToDo's
		</h2>
	)
}

export default Counter
