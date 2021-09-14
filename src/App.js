import Counter from './components/Counter'
import Search from './components/Search'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'

const todos = [
	{ text: 'Cortar cebolla', completed: true },
	{ text: 'Tomar el curso de React en Platzi', completed: false },
	{ text: 'Ir al gym', completed: false },
	{ text: 'Dormir siesta', completed: false },
]

function App() {
	return (
		<>
			<Counter />
			<Search />
			<TodoList>
				{todos.map((todo) => (
					<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
				))}
			</TodoList>
			<CreateTodoButton />
		</>
	)
}

export default App
