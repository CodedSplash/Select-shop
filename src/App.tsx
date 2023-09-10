import { FC } from 'react'
import { Container } from '@mui/material'
import ProductList from './components/ProductList/ProductList.tsx'

const App: FC = () => {
	return (
		<Container
			maxWidth={'md'}
			sx={{ paddingTop: '15px', paddingBottom: '15px' }}
		>
			<ProductList />
		</Container>
	)
}

export default App
