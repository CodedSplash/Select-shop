import { FC, useState } from 'react'
import { IProductCardProps } from './ProductCard.interface.ts'
import { formatNumberIntoCurrency } from '../../utils/numberIntoCurrency.ts'
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Chip,
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
					<CardContent
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: 'calc(100% - 32px)',
						}}
					>
						<Typography variant={'subtitle2'} component={'div'} pr={8}>
							{product.title}
						</Typography>
						<Chip
							label={formatNumberIntoCurrency(product.price)}
							color={'primary'}
						/>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	)
}

export default ProductCard
