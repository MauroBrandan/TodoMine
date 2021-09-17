import React from 'react'
import Header from './Header'
import Counter from './Counter'
import Search from './Search'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import CreateTodoButton from './CreateTodoButton'
import Modal from './Modal'
import TodoForm from './TodoForm'
import UserForm from './UserForm'
import { TodoContext } from '../contexts/TodoContext'

function AppIU() {
	const { searchedTodos, completeTodo, deleteTodo, openModal, user } =
		React.useContext(TodoContext)

	return (
		<>
			<Header />
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

			<CreateTodoButton />

			{!user && openModal && (
				<Modal>
					<UserForm />
				</Modal>
			)}

			{user && openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
		</>
	)
}

export default AppIU
