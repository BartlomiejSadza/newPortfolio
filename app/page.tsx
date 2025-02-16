import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Expirience from "@/components/Expirience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className='relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10'>
			<div className='max-w-7xl w-full'>
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProjects />
				<Clients />
				<Expirience />
				<Approach />
				<Footer />
			</div>
		</main>
	);
}
