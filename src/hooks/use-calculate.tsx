import { CalculatorOperation } from '@/models/operations'
// import Big from 'big.js'

// :: ---

const _calculate = (operand1: string, operand2: string, operation: CalculatorOperation) => {
	// const _o1 = Big(operand1)
	// const _o2 = Big(operand2)
	const _o1 = Number(operand1)
	const _o2 = Number(operand2)

	switch (operation) {
		case CalculatorOperation.ADD:
			return String(_o1 + _o2)
		// return _o1.add(_o2).toString()

		case CalculatorOperation.SUBTRACT:
			return String(_o1 - _o2)
		// return _o1.sub(_o2).toString()

		case CalculatorOperation.MULTIPLY:
			return String(_o1 * _o2)
		// return _o1.mul(_o2).toString()

		case CalculatorOperation.DIVIDE:
			return String(_o1 / _o2)
		// return _o1.div(_o2).toString()
	}
}

const useCalculate = () => {
	return _calculate
}

export default useCalculate
