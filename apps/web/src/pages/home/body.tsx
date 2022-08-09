import { Add16Regular } from '@fluentui/react-icons';
import { motion } from 'framer-motion';
import Logo from '../../assets/index/logo.png';
import underlay1 from '../../assets/index/underlay1.png';
import underlay2 from '../../assets/index/underlay2.png';
import ThreeDots from '../space/components/icons/threedots';
import { Controls, Image, NewButton, Root } from './styles';

const HomeBody = () => {
	return (
		<Root>
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
					Time to <b>get started.</b>
				</motion.h1>
				<NewButton
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
				>
					<Add16Regular />
					Create a new Space
				</NewButton>
			</div>
			<Controls
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<ThreeDots />
			</Controls>
		</Root>
	);
};

export default HomeBody;
