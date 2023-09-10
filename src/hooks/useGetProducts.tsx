import { useEffect, useState } from 'react'
import { IProduct } from '../models/Product.interface.ts'

const useGetProducts = () => {
	const [products, setProducts] = useState<IProduct[]>([])
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('https://fakestoreapi.com/products')
			.then((res: Response) => res.json())
			.then((res: IProduct[]) => setProducts(res))
			.catch((err: Error) => setError(err.message))
			.finally(() => setLoading(false))
	}, [])

	return { products, error, loading }
}

export default useGetProducts
