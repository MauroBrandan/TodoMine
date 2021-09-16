import React from 'react'
import Counter from './Counter'
import Search from './Search'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import CreateTodoButton from './CreateTodoButton'
import Modal from './Modal'
import TodoForm from './TodoForm'
import { TodoContext } from '../contexts/TodoContext'

function AppIU() {
	const { searchedTodos, completeTodo, deleteTodo, openModal } =
		React.useContext(TodoContext)

	return (
		<>
			<Counter />
			<Search />

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

			{openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}

			<CreateTodoButton />
		</>
	)
}

export default AppIU
