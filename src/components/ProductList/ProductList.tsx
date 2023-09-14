import { FC } from 'react'
import { Grid } from '@mui/material'
import { IProduct } from '../../models/Product.interface.ts'
import ProductCard from '../ProductCard/ProductCard.tsx'
import { IProductListProps } from './ProductList.interface.ts'

const ProductList: FC<IProductListProps> = ({ products }) => {
	return (
		<Grid container spacing={2}>
			{products.map((product: IProduct) => (
				<Grid item xs={6} sx={{ display: 'flex' }} key={product.id}>
					<ProductCard product={product} />
				</Grid>
			))}
		</Grid>
	)
}

export default ProductList
