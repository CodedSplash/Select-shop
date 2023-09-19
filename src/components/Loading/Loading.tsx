import { FC, useContext } from 'react'
import { createPortal } from 'react-dom'
import { CircularProgress, Grid } from '@mui/material'
import { DataProductsContext } from '../../contexts/ProductsContext'

const Loading: FC = () => {
	const { loading } = useContext(DataProductsContext)

	return (
		<>
			{loading &&
				createPortal(
					<Grid
						container
						direction={'row'}
						justifyContent='center'
						alignItems='center'
						sx={{
							position: 'absolute',
							top: 0,
							left: 0,
							zIndex: 10,
							height: '100%',
							width: '100%',
							backgroundColor: '#fff',
							overflow: 'hidden',
						}}
					>
						<CircularProgress />
					</Grid>,
					document.body,
				)}
		</>
	)
}

export default Loading
