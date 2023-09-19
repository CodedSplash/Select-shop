import { FC, useContext } from 'react'
import { createPortal } from 'react-dom'
import { Alert } from '@mui/material'
import { DataProductsContext } from '../../contexts/ProductsContext'

const Error: FC = () => {
	const { error } = useContext(DataProductsContext)

	return (
		<>
			{error &&
				createPortal(
					<Alert
						severity='error'
						sx={{ position: 'fixed', top: 15, right: 10 }}
					>
						{error}
					</Alert>,
					document.body,
				)}
		</>
	)
}

export default Error
