import React from 'react'

function EmptySearchResults({ searchText }) {
	return (
		<div>
			<p style={{ fontSize: '1.5rem' }}>
				No hay resultados para <span style={{ color: 'white' }}>{searchText} </span>
			</p>
		</div>
	)
}

export default EmptySearchResults
