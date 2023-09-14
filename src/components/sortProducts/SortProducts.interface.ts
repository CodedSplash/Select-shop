import { SelectChangeEvent } from '@mui/material'

export interface ISortProductsProps {
	sortTypeValue: string
	handleSortTypeValue: (event: SelectChangeEvent) => void
}
