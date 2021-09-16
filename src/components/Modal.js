import ReactDOM from 'react-dom'

import './styles/Modal.css'

function Modal({ children }) {
	return ReactDOM.createPortal(
		<div className='modal'>{children}</div>,
		document.getElementById('modal')
	)
}

export default Modal
