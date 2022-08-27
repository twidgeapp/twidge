import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
	mochaTheme,
	globalCss,
	frappeTheme,
	macchiatoTheme,
} from '@twidge/config/stitches.config';
import { ThemeProvider } from 'next-themes';
import { BrowserRouter } from 'react-router-dom';
import rspc, { client, queryClient } from '@twidge/utils/query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const globalStyles = globalCss({
	body: {
		background: '$backgroundColor',
		color: '$textColor',
		padding: '0px',
		margin: '0px',
		'#root': {
			width: '100vw',
			height: '100vh',
			overflow: 'hidden !important',
		},
		'::selection': {
			background: '$selectionColor',
			color: '$textColor',
		},

		'::moz-selection': {
			background: '$selectionColor',
			color: '$textColor',
		},
	},
});

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<ThemeProvider
		attribute="class"
		defaultTheme="macchiato"
		value={{
			latte: 'light',
			mocha: mochaTheme.className,
			frappe: frappeTheme.className,
			macchiato: macchiatoTheme.className,
		}}
	>
		<rspc.Provider client={client} queryClient={queryClient}>
			<BrowserRouter>
				<App />
				<ReactQueryDevtools initialIsOpen={false} />
			</BrowserRouter>
		</rspc.Provider>
	</ThemeProvider>
	// </React.StrictMode>
);
