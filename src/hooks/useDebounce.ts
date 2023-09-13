import { useEffect, useRef } from 'react'

const useDebounce = (
	fn: () => void,
	value: number | string,
	timeout: number,
) => {
	const timerRef = useRef(0)

	const debounceFunction = () => {
		if (timerRef.current) {
			clearTimeout(timerRef.current)
		}

		timerRef.current = setTimeout(fn, timeout)
	}

	useEffect(() => {
		debounceFunction()
	}, [value])
}

export default useDebounce
