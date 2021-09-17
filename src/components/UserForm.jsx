import React, { useState, useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

import './styles/UserForm.css'

function UserForm() {
	const { setOpenModal, addUser } = useContext(TodoContext)
	const [userValue, setUserValue] = useState('')

	const onChangeInputValue = (event) => {
		setUserValue(event.target.value)
	}

	const onSubmitUser = (event) => {
		event.preventDefault()
		console.log(`Hola ${userValue}`)
		if (userValue.length > 0) {
			addUser(userValue)
			setOpenModal(false)
		}
	}

	return (
		<form className='UserForm' onSubmit={onSubmitUser}>
			<h2>
				¡Hola! <br /> Bienvenido a Todo Mine
			</h2>
			<p>Tu app para organizar tus tareas del día a día</p>
			<label>¿Como te llamas?</label>
			<input
				type='text'
				placeholder='Tu nombre'
				maxLength='13'
				value={userValue}
				onChange={onChangeInputValue}
			/>
			<button className='UserForm__button' type='submit'>
				¡Empecemos!
			</button>
		</form>
	)
}

export default UserForm
