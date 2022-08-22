import { useContext } from 'react'
import { OperatorChainContext } from '@/contexts/operator-chain'

// :: ---

const useCalculatorState = () => {
	return useContext(OperatorChainContext)
}

export default useCalculatorState
