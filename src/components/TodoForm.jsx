import React, { useState } from 'react'

import './styles/TodoForm.css'

function TodoForm({ setOpenModal, addTodo }) {
	const [todoValue, setTodoValue] = useState('')

	const onChangeTextValue = (event) => {
		setTodoValue(event.target.value)
	}

	const onSubmitTodo = (event) => {
		event.preventDefault()
		if (todoValue.length > 0) {
			addTodo(todoValue)
		}
		setOpenModal(false)
	}

	const onCancel = () => {
		setOpenModal(false)
	}

	return (
		<form onSubmit={onSubmitTodo} className='TodoForm'>
			<label>Escribe tu nuevo To Do</label>
			<textarea
				placeholder='Tu tarea'
				maxLength='55'
				onChange={onChangeTextValue}
				value={todoValue}
			/>
			<div className='TodoForm__buttonContainer'>
				<button
					className='TodoForm__button TodoForm__button--cancel'
					type='button'
					onClick={onCancel}
				>
					Cancelar
				</button>
				<button className='TodoForm__button TodoForm__button--add' type='submit'>
					Añadir
				</button>
			</div>
		</form>
	)
}

export default TodoForm
