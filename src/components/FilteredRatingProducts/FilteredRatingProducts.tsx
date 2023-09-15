import { FC } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { IFilteredRatingProductsProps } from './FilteredRatingProducts.interface.ts'

const FilteredRatingProducts: FC<IFilteredRatingProductsProps> = ({
	handleFilteredRating,
	filteredType,
}) => {
	return (
		<>
			<FormControl>
				<InputLabel id='filtered-select-label'>Фильтровать</InputLabel>
				<Select
					labelId='filtered-select-label'
					id='filtered-simple-select'
					value={filteredType}
					label='Фильтровать'
					onChange={handleFilteredRating}
				>
					<MenuItem value={'all'}>Показать все</MenuItem>
					<MenuItem value={'rate1'}>По рейтингу 1</MenuItem>
					<MenuItem value={'rate2'}>По рейтингу 2</MenuItem>
					<MenuItem value={'rate3'}>По рейтингу 3</MenuItem>
					<MenuItem value={'rate4'}>По рейтингу 4</MenuItem>
					<MenuItem value={'rate5'}>По рейтингу 5</MenuItem>
				</Select>
			</FormControl>
		</>
	)
}

export default FilteredRatingProducts
