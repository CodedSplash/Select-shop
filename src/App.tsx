import { FC } from 'react'
import { Container } from '@mui/material'
import ProductList from './components/ProductList/ProductList.tsx'
import ProductSearch from './components/ProductSearch/ProductSearch.tsx'
import SortProducts from './components/sortProducts/SortProducts.tsx'
import styles from './App.module.css'
import Cart from './components/Cart/Cart.tsx'
import Error from './components/Error/Error.tsx'
import AppContexts from './contexts/AppContexts.tsx'
import Loading from './components/Loading/Loading.tsx'
import FilteredRatingProducts from './components/FilteredRatingProducts/FilteredRatingProducts.tsx'

const App: FC = () => {
	return (
		<>
			<AppContexts>
				<Error />

				<Loading />

				<Cart />

				<Container
					maxWidth={'md'}
					sx={{ paddingTop: '15px', paddingBottom: '15px' }}
				>
					<div className={styles.search}>
						<ProductSearch />
					</div>
					<div className={styles.sort}>
						<SortProducts />
						<FilteredRatingProducts />
					</div>
					<ProductList />
				</Container>
			</AppContexts>
		</>
	)
}

export default App
