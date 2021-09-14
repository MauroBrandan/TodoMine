import React from 'react'

import './styles/TodoList.css'

function TodoList(props) {
	return <ul>{props.children}</ul>
}

export default TodoList
