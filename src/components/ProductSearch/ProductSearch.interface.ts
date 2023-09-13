import { ChangeEvent } from 'react'

export interface IProductSearchProps {
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}
