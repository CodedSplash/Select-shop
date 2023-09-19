import { FC, ReactNode, createContext, useContext, useState } from 'react'
import { FiltereRatingModel } from '../models/FilteredRating.model'
import { sortTypeModel } from '../models/SortType.model'
import useSortProducts from '../hooks/useSortProducts'
import useFilteredRatingProducts from '../hooks/useFilteredRatingProducts'
import { SelectChangeEvent } from '@mui/material'
import { SearchContext } from './SearchProductContext'
import { IFiltersProduct } from '../models/FiltersProduct.interface'

interface IFiltersContextProps {
	children: ReactNode
}

export const FiltersProductsContext = createContext<IFiltersProduct>({
	filteredRatingProducts: [],
	sortType: 'title',
	filteredRatingType: 'all',
	handleSortType: () => {},
	handleFilteredRatingType: () => {},
})

const FiltersProductContext: FC<IFiltersContextProps> = ({ children }) => {
	const [sortType, setSortType] = useState<sortTypeModel>('title')
	const [filteredRatingType, setFilteredRatingType] =
		useState<FiltereRatingModel>('all')

	const { filteredProducts } = useContext(SearchContext)

	const sortProducts = useSortProducts(filteredProducts, sortType)
	const filteredRatingProducts = useFilteredRatingProducts(
		sortProducts,
		filteredRatingType,
	)

	const handleSortType = (event: SelectChangeEvent) => {
		setSortType(event.target.value as sortTypeModel)
	}

	const handleFilteredRatingType = (event: SelectChangeEvent) => {
		setFilteredRatingType(event.target.value as FiltereRatingModel)
	}

	const FiltersContext: IFiltersProduct = {
		filteredRatingProducts,
		sortType,
		filteredRatingType,
		handleSortType,
		handleFilteredRatingType,
	}

	return (
		<FiltersProductsContext.Provider value={FiltersContext}>
			{children}
		</FiltersProductsContext.Provider>
	)
}

export default FiltersProductContext
