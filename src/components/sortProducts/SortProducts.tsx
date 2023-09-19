import { FC, useContext } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FiltersProductsContext } from '../../contexts/FiltersContext'

const SortProducts: FC = () => {
	const { sortType, handleSortType } = useContext(FiltersProductsContext)

	return (
		<>
			<FormControl>
				<InputLabel id='select-label'>Сортировка</InputLabel>
				<Select
					labelId='select-label'
					id='simple-select'
					value={sortType}
					label='Сортировка'
					onChange={handleSortType}
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
