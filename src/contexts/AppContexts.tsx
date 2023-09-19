import { FC, ReactNode } from 'react'
import ProductsContext from './ProductsContext'
import SearchProductContext from './SearchProductContext'
import FiltersProductContext from './FiltersContext'
import CartProductsContext from './CartProductsContext'

interface IAppContextsProps {
	children: ReactNode
}

const AppContexts: FC<IAppContextsProps> = ({ children }) => {
	return (
		<ProductsContext>
			<SearchProductContext>
				<FiltersProductContext>
					<CartProductsContext>{children}</CartProductsContext>
				</FiltersProductContext>
			</SearchProductContext>
		</ProductsContext>
	)
}

export default AppContexts
