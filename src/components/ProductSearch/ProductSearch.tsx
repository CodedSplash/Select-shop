import { FC, useContext } from 'react'
import { TextField } from '@mui/material'
import { SearchContext } from '../../contexts/SearchProductContext'

const ProductSearch: FC = () => {
	const { handleSearch } = useContext(SearchContext)

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
