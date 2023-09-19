import { FC, useState } from 'react'
import { IProductCardProps } from './ProductCard.interface.ts'
import { formatNumberIntoCurrency } from '../../utils/numberIntoCurrency.ts'
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Chip,
	Rating,
	Typography,
} from '@mui/material'
import { createPortal } from 'react-dom'
import ModalProduct from '../ModalProduct/ModalProduct.tsx'

const ProductCard: FC<IProductCardProps> = ({ product }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClose = () => {
		setIsOpen(false)
	}

	const handelOpen = () => {
		setIsOpen(true)
	}

	return (
		<>
			{createPortal(
				<ModalProduct
					product={product}
					open={isOpen}
					handleClose={handleClose}
				/>,
				document.body,
			)}

			<Card
				sx={{
					display: 'flex',
					alignItems: 'stretch',
					flexDirection: 'column',
					width: '100%',
				}}
			>
				<CardActionArea
					sx={{
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
					}}
					onClick={handelOpen}
				>
					<CardMedia
						component={'img'}
						height={300}
						image={product.image.toString()}
						alt={product.title}
						sx={{
							objectFit: 'contain',
						}}
					/>
					<CardContent sx={{ width: 'calc(100% - 32px)' }}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								width: '100%',
							}}
						>
							<Typography variant={'subtitle2'} component={'div'} pr={8}>
								{product.title}
							</Typography>
							<Chip
								label={formatNumberIntoCurrency(product.price)}
								color={'primary'}
							/>
						</Box>
						<Rating
							name='read-only'
							value={Math.floor(product.rating.rate)}
							readOnly
						/>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	)
}

export default ProductCard
