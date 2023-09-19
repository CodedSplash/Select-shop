import { FC, ReactNode, createContext } from 'react'
import useGetProducts from '../hooks/useGetProducts'
import { IProductsData } from '../models/ProductsData.interface'

interface IProductsContextProps {
	children: ReactNode
}

export const DataProductsContext = createContext<IProductsData>({
	products: [],
	error: '',
	loading: false,
})

const ProductsContext: FC<IProductsContextProps> = ({ children }) => {
	const ProductsData = useGetProducts()

	return (
		<DataProductsContext.Provider value={ProductsData}>
			{children}
		</DataProductsContext.Provider>
	)
}

export default ProductsContext
