import useCalculatorState from '@/hooks/use-calculator-state'

// :: ---

export type CalculatorDisplayProps = {
	//
}

const CalculatorDisplay = () => {
	const { operands } = useCalculatorState()

	return (
		<div className='p-2'>
			<div className='w-full border-t-4 border-x border-x-stone-600 border-opacity-50 border-t-slate-700 mono text-right px-4 py-2 font-lcd text-6xl bg-stone-400 bg-opacity-30 text-slate-800 text-opacity-70'>
				{operands[operands.length - 1]}
			</div>
		</div>
	)
}

export default CalculatorDisplay
