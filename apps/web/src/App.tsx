import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes, useLocation } from 'react-router-dom';
import IndexPage from './pages/index';
import ErrorFallback from './pages/error';

function App() {
	const location = useLocation();

	return (
		<ErrorBoundary
			onReset={() => window.location.reload()}
			FallbackComponent={ErrorFallback}
		>
			<AnimatePresence exitBeforeEnter>
				<Routes key={location.pathname} location={location}>
					<Route path="/" element={<IndexPage />} />
				</Routes>
			</AnimatePresence>
		</ErrorBoundary>
	);
}

export default App;
