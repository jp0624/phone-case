import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import Image from 'next/image'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
	imgSrc: string
	dark?: boolean
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
	/**
	 * Calculate the position of a given value in the Fibonacci sequence.
	 * @param value The value to find in the Fibonacci sequence.
	 * @returns The position of the value in the Fibonacci sequence, or null if not found.
	 */

	// function isFibonacci(value: number): number | string {
	// 	let position = 0
	// 	let a = 0
	// 	let b = 1
	// 	let next = a + b
	//
	// 	while (next < value) {
	// 		a = b
	// 		b = next
	// 		next = a + b
	// 		position++
	// 	}
	// 	return next === value ? 'Number is in the fibonacci sequence at position: ' + position : 'Number is not in the fibonacci sequence'
	// }
	// const value = isFibonacci(132)

	return (
		<>
			<div
				className={cn(
					'relative pointer-events-none z-50 overflow-hidden',
					className
				)}
				{...props}
			>
				<Image
					src={
						dark
							? '/img/phone-template-dark-edges.png'
							: '/img/phone-template-white-edges.png'
					}
					alt='Phone Image'
					className='pointer-events-none z-50 select-none'
					height={1831}
					width={896}
				/>
				<div className='absolute -z-10 inset-0'>
					<Image
						src={imgSrc}
						alt='Overlaying Phone Image'
						className='object-cover'
						height={1831}
						width={896}
					/>
				</div>
			</div>
		</>
	)
}

export default Phone
