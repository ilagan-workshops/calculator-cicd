import Calculator from '@/components/calculator'

// :: ---

export type HomeViewProps = {
	//
}

const HomeView = () => {
	return (
		<section className='home-screen flex justify-center items-center w-screen min-h-screen'>
			<Calculator />
		</section>
	)
}

export default HomeView
