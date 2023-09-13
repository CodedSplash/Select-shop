import { TextField } from '@mui/material'
import { FC } from 'react'
import { IProductSearchProps } from './ProductSearch.interface'

const ProductSearch: FC<IProductSearchProps> = ({ handleSearch }) => {
	return (
		<TextField
			label={'Поиск...'}
			variant={'outlined'}
			fullWidth={true}
			onChange={handleSearch}
		/>
	)
}

export default ProductSearch
