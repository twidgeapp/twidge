import { styled } from '@twidge/config/stitches.config';
import { motion } from 'framer-motion';
import Logo from '../assets/index/logo.svg';
import underlay1 from '../assets/index/underlay1.png';
import underlay2 from '../assets/index/underlay2.png';

const Root = styled(motion.div, {
	width: '100vw',
	height: '100vh',
	overflow: 'hidden',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	'.body': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '0px',
		zIndex: 10,
		position: 'relative',
		'.header': {
			margin: '0px',
			fontFamily: 'Open Sans',
			fontStyle: 'normal',
			fontWeight: 400,
			fontSize: '48px',
			lineHeight: '65px',
		},

		'.description': {
			fontStyle: 'normal',
			fontWeight: '300',
			margin: '0px',
			marginTop: '12px',
			fontSize: '24px',
			lineHeight: '29px',
		},
	},
});

const Image = styled(motion.img, {
	userSelect: 'none',
	width: '2000px',
	height: '2000px',
	pointerEvents: 'none',
	zIndex: -10,
	position: 'absolute',
});

const IndexPage = () => {
	return (
		<Root initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 2 }}>
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
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="header"
				>
					Welcome to <b>Twidge</b>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="description"
				>
					A smart-canvas for your mind
				</motion.p>
			</div>
		</Root>
	);
};

export default IndexPage;
