import { SelectChangeEvent } from '@mui/material'
import { FiltereRatingModel } from '../../models/FilteredRating.model'

export interface IFilteredRatingProductsProps {
	handleFilteredRating: (event: SelectChangeEvent) => void
	filteredType: FiltereRatingModel
}
