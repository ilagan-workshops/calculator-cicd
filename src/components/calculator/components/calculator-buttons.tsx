import useCalculatorState from '@/hooks/use-calculator-state'
import CalculatorButton from './calculator-button'
import { CalculatorOperation } from '@/models/operations'

// :: ---

export type CalculatorButtonsProps = {
	//
}

const CalculatorButtons = () => {
	const { addOperand, addOperation, clearQueue, resolveOperation } = useCalculatorState()

	return (
		<div className='grid grid-cols-5 grid-rows-5 gap-4'>
			<div className='col-span-5 row-span-1 grid grid-cols-5 grid-rows-1 gap-4'>
				<span></span>
				<CalculatorButton text='MR' className='mt-4 text-sm' />
				<CalculatorButton text='M+' className='mt-4 text-sm' />
				<CalculatorButton text='M-' className='mt-4 text-sm' />
				<CalculatorButton text='C' onClick={clearQueue} className='mt-4 text-sm bg-red-800' />
			</div>
			<div className='col-span-3 row-span-4 grid grid-cols-3 grid-rows-4 gap-4'>
				<CalculatorButton text='1' onClick={() => addOperand('1')} />
				<CalculatorButton text='2' onClick={() => addOperand('2')} />
				<CalculatorButton text='3' onClick={() => addOperand('3')} />
				<CalculatorButton text='4' onClick={() => addOperand('4')} />
				<CalculatorButton text='5' onClick={() => addOperand('5')} />
				<CalculatorButton text='6' onClick={() => addOperand('6')} />
				<CalculatorButton text='7' onClick={() => addOperand('7')} />
				<CalculatorButton text='8' onClick={() => addOperand('8')} />
				<CalculatorButton text='9' onClick={() => addOperand('9')} />
				<CalculatorButton text='0' onClick={() => addOperand('0')} className='col-span-2' />
				<CalculatorButton text='.' onClick={() => addOperand('.')} />
			</div>

			<div className='col-span-2 row-span-2 grid grid-cols-2 grid-rows-2 gap-4'>
				<CalculatorButton text='+' onClick={() => addOperation(CalculatorOperation.ADD)} />
				<CalculatorButton text='-' onClick={() => addOperation(CalculatorOperation.SUBTRACT)} />
				<CalculatorButton text='x' onClick={() => addOperation(CalculatorOperation.MULTIPLY)} />
				<CalculatorButton text='÷' onClick={() => addOperation(CalculatorOperation.DIVIDE)} />
			</div>

			<CalculatorButton text='=' onClick={resolveOperation} className='col-span-2 row-span-2' />
		</div>
	)
}

export default CalculatorButtons
