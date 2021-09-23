import React from 'react'

import './styles/TodoList.css'

function TodoList(props) {
	return (
		<>
			{props.error && props.onError()}
			{props.loading && props.onLoading()}

			{!props.loading && !props.totalTodos && props.onEmptyTodos()}

			{!!props.totalTodos && !props.searchedTodos.length && props.onEmptySearchResults()}
			
			<ul>{props.searchedTodos.map((todo) => props.render(todo))}</ul>
		</>
	)
}

export default TodoList
