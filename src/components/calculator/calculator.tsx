import CalculatorButtons from './components/calculator-buttons'
import CalculatorBranding from './components/calculator-branding'
import CalculatorDisplay from './components/calculator-display'

import OperatorChainContainer from '@/contexts/operator-chain'

// :: ---

export type CalculatorProps = {
	//
}

const Calculator = () => {
	return (
		<OperatorChainContainer>
			<div className='p-4 flex flex-col gap-4 border-b-8 border-slate-700 border-opacity-30 bg-slate-500 rounded-2xl shadow-2xl shadow-gray-800'>
				<CalculatorDisplay />
				<CalculatorBranding />
				<CalculatorButtons />
			</div>
		</OperatorChainContainer>
	)
}

export default Calculator
