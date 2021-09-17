import React, { useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider(props) {
	const [todos, setTodos] = useLocalStorage('TODOS_V1', [])
	const [user, setUser] = useLocalStorage('USER_V1', '')
	const [searchValue, setSearchValue] = useState('')
	const [openModal, setOpenModal] = useState(false)

	const totalTodos = todos.length
	const completedTodos = todos.filter((todo) => todo.completed).length

	const searchedTodos = todos.filter((todo) =>
		todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
	)

	const addTodo = (text) => {
		const newTodos = [...todos]
		newTodos.push({
			completed: false,
			text,
			id: Math.random().toString(35).substr(2, 13),
		})
		setTodos(newTodos)
	}

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

	useEffect(() => !user && setOpenModal(true), [])

	const addUser = (user) => {
		setUser(user)
	}

	return (
		<TodoContext.Provider
			value={{
				totalTodos,
				completedTodos,
				searchValue,
				setSearchValue,
				searchedTodos,
				addTodo,
				completeTodo,
				deleteTodo,
				openModal,
				setOpenModal,
				user,
				addUser,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	)
}

export { TodoContext, TodoProvider }
