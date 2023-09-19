import { FC, useContext } from 'react'
import { Grid } from '@mui/material'
import { IProduct } from '../../models/Product.interface.ts'
import ProductCard from '../ProductCard/ProductCard.tsx'
import { FiltersProductsContext } from '../../contexts/FiltersContext.tsx'

const ProductList: FC = () => {
	const { filteredRatingProducts } = useContext(FiltersProductsContext)

	return (
		<Grid container spacing={2}>
			{filteredRatingProducts.map((product: IProduct) => (
				<Grid item xs={6} sx={{ display: 'flex' }} key={product.id}>
					<ProductCard product={product} />
				</Grid>
			))}
		</Grid>
	)
}

export default ProductList
