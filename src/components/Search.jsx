import React from 'react'

import './styles/Search.css'

function Search({ searchValue, setSearchValue, loading }) {
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
			disabled={loading}
		/>
	)
}

export default Search
