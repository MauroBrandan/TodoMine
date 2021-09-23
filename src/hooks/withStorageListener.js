import React, { useState, useEffect } from 'react'

function withStorageListener(WrappedComponent) {
	return function WrappedComponentWithStorageListener(props) {
		const [storageChange, setStorageChange] = useState(false)

		useEffect(() => {
			const onChange = (change) => {
				if (change.key === 'TODOS_V1') {
					setStorageChange(true)
				}
			}

			window.addEventListener('storage', onChange)

			return () => window.removeEventListener('storage', onChange)
		}, [])

		const toggleShow = () => {
			props.sincronize()
			setStorageChange(false)
		}

		return <WrappedComponent show={storageChange} toggleShow={toggleShow} />
	}
}

export default withStorageListener
