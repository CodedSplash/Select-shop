import { FC } from 'react'
import { Box, Container } from '@mui/material'
import ProductList from './components/ProductList/ProductList.tsx'
import ProductSearch from './components/ProductSearch/ProductSearch.tsx'
import SortProducts from './components/sortProducts/SortProducts.tsx'
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
					<Box
						sx={{ maxWidth: '75%', margin: '0 auto', paddingBottom: '20px' }}
					>
						<ProductSearch />
					</Box>
					<Box
						sx={{ display: 'flex', columnGap: '15px', paddingBottom: '15px' }}
					>
						<SortProducts />
						<FilteredRatingProducts />
					</Box>
					<ProductList />
				</Container>
			</AppContexts>
		</>
	)
}

export default App
