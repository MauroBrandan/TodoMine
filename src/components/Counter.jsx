import React from 'react'

import './styles/Counter.css'

function Counter({ total, completedTodos }) {
	return (
		<h2 className='Counter'>
			Has completado {completedTodos} de {total} TODOs
		</h2>
	)
}

export default Counter
