import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider(props) {
	const [todos, setTodos] = useLocalStorage('TODOS_V1', [])
	const [searchValue, setSearchValue] = useState('')

	const totalTodos = todos.length
	const completedTodos = todos.filter((todo) => todo.completed).length

	const searchedTodos = todos.filter((todo) =>
		todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
	)

	const completeTodo = (id) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id)

		const newTodos = [...todos]
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed
		setTodos(newTodos)
	}

	const deleteTodo = (id) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id)

		const newTodos = [...todos]
		newTodos.splice(todoIndex, 1)
		setTodos(newTodos)
	}

	return (
		<TodoContext.Provider
			value={{
				totalTodos,
				completedTodos,
				searchValue,
				setSearchValue,
				searchedTodos,
				completeTodo,
				deleteTodo,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	)
}

export { TodoContext, TodoProvider }
