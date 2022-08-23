// :: ---

export type CalculatorBrandingProps = {
	//
}

const CalculatorBranding = () => {
	return (
		<div className='px-4 flex flex-row justify-between'>
			<div className='font-mono font-black text-3xl text-slate-100 text-opacity-20'>TR-800</div>
			<div className='w-1/4 grid grid-cols-3 grid-rows-1 gap-0'>
				<div className='h-8 bg-amber-600 bg-opacity-50 border border-t-2 border-b-0 border-amber-900 border-opacity-50'></div>
				<div className='h-8 bg-amber-600 bg-opacity-50 border border-t-2 border-b-0 border-amber-900 border-opacity-50'></div>
				<div className='h-8 bg-amber-600 bg-opacity-50 border border-t-2 border-b-0 border-amber-900 border-opacity-50'></div>
			</div>
		</div>
	)
}

export default CalculatorBranding
