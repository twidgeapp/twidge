import type { NextPage } from "next";
import Bloom from "../components/blooms";
import CatalystSection from "../components/catalyst";
import HeroSection from "../components/hero";
import Navbar from "../components/navbar";
import Preview from "../components/preview";

const Home: NextPage = () => {
	return (
		<div className='min-w-screen min-h-screen bg-bg font-inter pb-56'>
			<Bloom />
			<Navbar />
			<HeroSection />
			<Preview />
			<CatalystSection />
		</div>
	);
};

export default Home;
