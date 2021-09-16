import React from 'react'
import { TodoContext } from '../contexts/TodoContext'

import './styles/Search.css'

function Search() {
	const { searchValue, setSearchValue } = React.useContext(TodoContext)

	const onChangeSearchValue = (event) => {
		setSearchValue(event.target.value)
	}

	return (
		<input
			className='Search'
			type='text'
			placeholder='Buscar tarea'
			value={searchValue}
			onChange={onChangeSearchValue}
		/>
	)
}

export default Search
