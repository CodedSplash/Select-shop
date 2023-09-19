import { SelectChangeEvent } from '@mui/material'
import { IProduct } from './Product.interface'
import { sortTypeModel } from './SortType.model'
import { FiltereRatingModel } from './FilteredRating.model'

export interface IFiltersProduct {
	filteredRatingProducts: IProduct[]
	sortType: sortTypeModel
	filteredRatingType: FiltereRatingModel
	handleSortType: (event: SelectChangeEvent) => void
	handleFilteredRatingType: (event: SelectChangeEvent) => void
}
