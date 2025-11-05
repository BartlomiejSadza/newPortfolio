import Grid from '@/components/features/grid/Grid';
import Hero from '@/components/features/hero/Hero';
import RecentProjects from '@/components/features/projects/RecentProjects';
import Clients from '@/components/features/testimonials/Clients';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';
import Experience from '@/components/features/experience/Experience';
import Approach from '@/components/features/approach/Approach';
import Footer from '@/components/features/footer/Footer';

export default function Home() {
	return (
		<main className='relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10'>
			<div className='max-w-7xl w-full'>
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProjects />
				<Clients />2
				<Experience />
				<Approach />
				<Footer />
			</div>
		</main>
	);
}
