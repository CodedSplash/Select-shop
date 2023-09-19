import {
	ChangeEvent,
	FC,
	ReactNode,
	createContext,
	useContext,
	useState,
} from 'react'
import { DataProductsContext } from './ProductsContext'
import useSearch from '../hooks/useSearch'
import { ISearchProduct } from '../models/SearchProductContext.interface'

interface ISearchProductContextProps {
	children: ReactNode
}

export const SearchContext = createContext<ISearchProduct>({
	filteredProducts: [],
	handleSearch: () => {},
})

const SearchProductContext: FC<ISearchProductContextProps> = ({ children }) => {
	const [inputSearch, setInputSearch] = useState('')

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setInputSearch(event.target.value)
	}
	const { products } = useContext(DataProductsContext)

	const filteredProducts = useSearch(products, inputSearch)

	const SearchProduct: ISearchProduct = {
		filteredProducts,
		handleSearch,
	}

	return (
		<SearchContext.Provider value={SearchProduct}>
			{children}
		</SearchContext.Provider>
	)
}

export default SearchProductContext
