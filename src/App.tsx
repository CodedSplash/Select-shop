import { ChangeEvent, FC, useState } from 'react'
import { Alert, CircularProgress, Container, Grid } from '@mui/material'
import ProductList from './components/ProductList/ProductList.tsx'
import ProductSearch from './components/ProductSearch/ProductSearch.tsx'
import styles from './App.module.css'
import useGetProducts from './hooks/useGetProducts.tsx'
import { createPortal } from 'react-dom'
import useSearch from './hooks/useSearch.ts'

const App: FC = () => {
	const [inputSearch, setInputSearch] = useState('')

	const { products, error, loading } = useGetProducts()
	const filteredProducts = useSearch(products, inputSearch)

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setInputSearch(event.target.value)
	}

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

			<Container
				maxWidth={'md'}
				sx={{ paddingTop: '15px', paddingBottom: '15px' }}
			>
				{products.length && (
					<>
						<div className={styles.search}>
							<ProductSearch handleSearch={handleSearch} />
						</div>
						<ProductList products={filteredProducts} />
					</>
				)}
			</Container>
		</>
	)
}

export default App
