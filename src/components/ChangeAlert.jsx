import React from 'react'
import withStorageListener from '../hooks/withStorageListener'

import './styles/ChangeAlert.css'

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export default ChangeAlertWithStorageListener
