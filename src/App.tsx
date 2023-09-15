import { ChangeEvent, FC, useState } from 'react'
import {
	Alert,
	CircularProgress,
	Container,
	Grid,
	SelectChangeEvent,
} from '@mui/material'
import ProductList from './components/ProductList/ProductList.tsx'
import ProductSearch from './components/ProductSearch/ProductSearch.tsx'
import SortProducts from './components/sortProducts/SortProducts.tsx'
import styles from './App.module.css'
import useGetProducts from './hooks/useGetProducts.tsx'
import { createPortal } from 'react-dom'
import useSearch from './hooks/useSearch.ts'
import useSortProducts from './hooks/useSortProducts.ts'
import { sortTypeModel } from './models/SortType.model.ts'
import FilteredRatingProducts from './components/FilteredRatingProducts/FilteredRatingProducts.tsx'
import { FiltereRatingModel } from './models/FilteredRating.model.ts'
import useFilteredRatingProducts from './hooks/useFilteredRatingProducts.ts'

const App: FC = () => {
	const [inputSearch, setInputSearch] = useState('')
	const [sortType, setSortType] = useState<sortTypeModel>('title')
	const [filteredRatingType, setFilteredRatingType] =
		useState<FiltereRatingModel>('all')

	const { products, error, loading } = useGetProducts()
	const filteredProducts = useSearch(products, inputSearch)
	const sortProducts = useSortProducts(filteredProducts, sortType)
	const filteredRatingProducts = useFilteredRatingProducts(
		sortProducts,
		filteredRatingType,
	)

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setInputSearch(event.target.value)
	}

	const handleSortType = (event: SelectChangeEvent) => {
		setSortType(event.target.value as sortTypeModel)
	}

	const handleFilteredRatingType = (event: SelectChangeEvent) => {
		setFilteredRatingType(event.target.value as FiltereRatingModel)
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
						<div className={styles.sort}>
							<SortProducts
								sortTypeValue={sortType}
								handleSortTypeValue={handleSortType}
							/>
							<FilteredRatingProducts
								filteredType={filteredRatingType}
								handleFilteredRating={handleFilteredRatingType}
							/>
						</div>
						<ProductList products={filteredRatingProducts} />
					</>
				)}
			</Container>
		</>
	)
}

export default App
