import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes, useLocation } from 'react-router-dom';
import ErrorFallback from './pages/error';
import useGetElements from '@twidge/utils/elements/actions';
import React, { useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

const IndexPage = React.lazy(() => import('./pages/index'));
const HomePage = React.lazy(() => import('./pages/home'));
const SpacePage = React.lazy(() => import('./pages/space'));

function App() {
	const location = useLocation();
	useEffect(() => {
		invoke('plugin:autostart|enable').then(console.log).catch(console.error); // make sure to catch errors !
	}, []);

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
