import { useState } from 'react'
import Counter from './components/Counter'
import Search from './components/Search'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'

const todosMocks = [
	{ text: 'Cortar cebolla', completed: true, id: 1 },
	{ text: 'Tomar el curso de React en Platzi', completed: false, id: 2 },
	{ text: 'Ir al gym', completed: false, id: 3 },
	{ text: 'Dormir siesta', completed: true, id: 4 },
]

function App() {
	const [todos, setTodos] = useState(todosMocks)
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
		<>
			<Counter total={totalTodos} completedTodos={completedTodos} />
			<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			<TodoList>
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.id}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.id)}
						onDelete={() => deleteTodo(todo.id)}
					/>
				))}
			</TodoList>
			<CreateTodoButton />
		</>
	)
}

export default App
