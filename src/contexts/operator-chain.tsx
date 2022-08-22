import React, { useState, useCallback, createContext } from 'react'

import useCalculate from '@/hooks/use-calculate'
import { CalculatorOperation } from '@/models/operations'

// :: ---

type ContextModel = {
	operands: string[]
	operation: CalculatorOperation | null

	addOperand: (d: string) => void
	addOperation: (o: CalculatorOperation) => void
	resolveOperation: () => void
	clearQueue: () => void
}

export const OperatorChainContext = createContext<ContextModel>({
	operands: [],
	operation: null,

	addOperand: () => null,
	addOperation: () => null,
	resolveOperation: () => null,
	clearQueue: () => null,
})

// :: ---

type OperatorChainContainerProps = React.PropsWithChildren

const OperatorChainContainer: React.FC<OperatorChainContainerProps> = (props) => {
	const [operands, setOperands] = useState<ContextModel['operands']>(['0'])
	const [operation, setOperation] = useState<ContextModel['operation']>(null)
	const [isShowingResult, setIsShowingResult] = useState(false)
	const calculate = useCalculate()

	const addOperand = useCallback(
		(d: string) => {
			console.debug('[addOperand]', operands, d)
			const _operands = [...operands]
			if (isShowingResult) {
				if (operation === null) {
					_operands.length = 0
				}

				_operands.push('0')
				setIsShowingResult(false)
			}

			const currentOperand = _operands[_operands.length - 1]

			if (d === '.') _operands[_operands.length - 1] = `${currentOperand}.`
			else if (currentOperand == '0') _operands[_operands.length - 1] = `${d}`
			else _operands[_operands.length - 1] = `${currentOperand}${d}`

			setOperands(_operands)
		},
		[operands, operation]
	)

	const addOperation = useCallback(
		(o: CalculatorOperation) => {
			if (isShowingResult && operation !== null) return

			if (operation === null) {
				setOperands([...operands, '0'])
				setIsShowingResult(false)
			} else {
				const [operand1, operand2] = operands
				const result = calculate(operand1, operand2, operation)

				setOperands([result])
				setIsShowingResult(true)
			}

			setOperation(o)
		},
		[operands, operation]
	)
	const resolveOperation = useCallback(() => {
		if (operation === null) return
		if (isShowingResult) return

		const [operand1, operand2] = operands
		const result = calculate(operand1, operand2, operation)

		setOperands([result])
		setOperation(null)
		setIsShowingResult(true)
	}, [operands, operation])

	const clearQueue = useCallback(() => {
		setOperands(['0'])
		setOperation(null)
		setIsShowingResult(false)
	}, [operands, operation])

	return (
		<OperatorChainContext.Provider
			value={{
				operands,
				operation: operation,
				addOperand,
				addOperation,
				resolveOperation,
				clearQueue,
			}}
		>
			{props.children}
		</OperatorChainContext.Provider>
	)
}

export default OperatorChainContainer
