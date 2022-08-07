import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import IndexPage from './pages';

function App() {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter>
			<Routes key={location.pathname} location={location}>
				<Route path="/" element={<IndexPage />} />
			</Routes>
		</AnimatePresence>
	);
}

export default App;
