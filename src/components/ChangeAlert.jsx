import React from 'react'
import useStorageListener from '../hooks/useStorageListener'

import './styles/ChangeAlert.css'

function ChangeAlert({ sincronize }) {
	const { show, toggleShow } = useStorageListener(sincronize)

	if (show) {
		return (
			<div className='ChangeAlert-bg'>
				<div className='ChangeAlert'>
					<p>
						Parece que cambiaste tus ToDo's en otra pestaña o ventana del navegador.
					</p>
					<p>¿Quieres sincronizar tus ToDo's?</p>
					<button onClick={toggleShow}>Volver a cargar la información</button>
				</div>
			</div>
		)
	} else {
		return null
	}
}

export default ChangeAlert
