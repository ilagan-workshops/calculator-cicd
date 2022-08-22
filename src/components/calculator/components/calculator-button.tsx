import React from 'react'
import clsx from 'clsx'

// :: ---

export type CalculatorButtonProps = {
	text: string
	className?: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const CalculatorButton = (props: CalculatorButtonProps) => {
	const { text, className, onClick } = props

	const classes = clsx([
		className,
		'py-2 px-8',
		'text-xl font-mono text-white',
		'bg-slate-700 rounded-2xl',
		'border-b-4 border-slate-600',
		'active:bg-slate-800 active:border-b',
	])

	return (
		<button className={classes} onClick={onClick}>
			{text}
		</button>
	)
}

export default CalculatorButton
