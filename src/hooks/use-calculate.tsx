import { CalculatorOperation } from '@/models/operations'

// :: ---

const _calculate = (operand1: string, operand2: string, operation: CalculatorOperation) => {
	console.debug('[calculate]', operand1, operand2, operation)

	const _o1 = Number(operand1)
	const _o2 = Number(operand2)

	switch (operation) {
		case CalculatorOperation.ADD:
			return String(_o1 + _o2)

		case CalculatorOperation.SUBTRACT:
			return String(_o1 - _o2)

		case CalculatorOperation.MULTIPLY:
			return String(_o1 * _o2)

		case CalculatorOperation.DIVIDE:
			return String(_o1 / _o2)
	}
}

const useCalculate = () => {
	return _calculate
}

export default useCalculate
