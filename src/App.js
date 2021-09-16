import React from 'react'
import AppIU from './components/AppIU'
import { TodoProvider } from './contexts/TodoContext'

function App() {
	return (
		<TodoProvider>
			<AppIU />
		</TodoProvider>
	)
}

export default App
