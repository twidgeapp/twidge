import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/index/logo.png';
import underlay1 from '../../assets/index/underlay1.png';
import underlay2 from '../../assets/index/underlay2.png';
import { Image, Root } from './styles';

const IndexPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const interval = setInterval(() => {
			navigate('/home');
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<Root
			initial={{ y: -100 }}
			exit={{ opacity: 0 }}
			animate={{ y: 0 }}
			transition={{ duration: 2 }}
		>
			<div className="body">
				<Image
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 2 }}
					src={underlay1}
					css={{ left: '-500px', bottom: '-500px' }}
				/>
				<Image
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 2 }}
					src={underlay2}
					css={{ right: '-500px', top: '-500px' }}
				/>

				<img src={Logo} />
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="header"
				>
					Welcome to <b>Twidge</b>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 2 }}
					className="description"
				>
					A smart-canvas for your mind
				</motion.p>
			</div>
		</Root>
	);
};

export default IndexPage;
