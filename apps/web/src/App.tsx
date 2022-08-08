import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes, useLocation } from 'react-router-dom';
import ErrorFallback from './pages/error';
import React from 'react';

const IndexPage = React.lazy(() => import('./pages/index'));
const HomePage = React.lazy(() => import('./pages/home'));
const SpacePage = React.lazy(() => import('./pages/space'));

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
					<Route path="/home" element={<HomePage />} />
					<Route path="/spaces/:id" element={<SpacePage />} />
				</Routes>
			</AnimatePresence>
		</ErrorBoundary>
	);
}

export default App;
