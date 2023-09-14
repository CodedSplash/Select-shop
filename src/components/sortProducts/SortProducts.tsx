import { FC } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { ISortProductsProps } from './SortProducts.interface.ts'

const SortProducts: FC<ISortProductsProps> = ({
	sortTypeValue,
	handleSortTypeValue,
}) => {
	return (
		<>
			<FormControl fullWidth>
				<InputLabel id='select-label'>Сортировка</InputLabel>
				<Select
					labelId='select-label'
					id='simple-select'
					value={sortTypeValue}
					label='Сортировка'
					onChange={handleSortTypeValue}
				>
					<MenuItem value={'title'}>По заголовку</MenuItem>
					<MenuItem value={'highPrice'}>По высокой цене</MenuItem>
					<MenuItem value={'lowPrice'}>По низкой цене</MenuItem>
				</Select>
			</FormControl>
		</>
	)
}

export default SortProducts
