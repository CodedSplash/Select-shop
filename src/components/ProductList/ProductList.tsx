import { FC } from 'react'
import { Alert, CircularProgress, Grid } from '@mui/material'
import useGetProducts from '../../hooks/useGetProducts.tsx'
import { IProduct } from '../../models/Product.interface.ts'
import ProductCard from '../ProductCard/ProductCard.tsx'

const ProductList: FC = () => {
	const { products, error, loading } = useGetProducts()

	return (
		<>
			{error && <Alert severity='error'>{error}</Alert>}

			{loading && (
				<Grid
					container
					direction={'row'}
					justifyContent='center'
					alignItems='center'
					sx={{ height: '100vh' }}
				>
					<CircularProgress />
				</Grid>
			)}

			{products && (
				<Grid container spacing={2}>
					{products.map((product: IProduct) => (
						<Grid item xs={6} sx={{ display: 'flex' }} key={product.id}>
							<ProductCard product={product} />
						</Grid>
					))}
				</Grid>
			)}
		</>
	)
}

export default ProductList
