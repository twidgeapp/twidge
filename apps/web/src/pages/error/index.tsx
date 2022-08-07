/* eslint-disable react/no-unescaped-entities */
import { Buttons, Root } from './styles';

const ErrorFallback = ({
	error,
	resetErrorBoundary,
}: {
	error: Error;
	resetErrorBoundary: any;
}) => {
	return (
		<Root>
			<div style={{ maxWidth: '50vw' }} className="body">
				<div className="header">Oops! You weren't supposed to see this 😠</div>
				<p className="description">What did you do?</p>
				<div style={{ whiteSpace: 'pre-line', marginTop: '12px' }}>
					<b>Error Message</b>:{'\n'}
					<span>{error.message}</span>
				</div>
			</div>
			<Buttons
				onClick={resetErrorBoundary}
				css={{ left: '12px', bottom: '12px' }}
			>
				Come again?
			</Buttons>
			<Buttons
				onClick={() => {
					window.location.replace(
						'https://github.com/VarunPotti/twidge/issues'
					);
				}}
				css={{ left: '120px', bottom: '12px' }}
			>
				Open GitHub issues
			</Buttons>
		</Root>
	);
};

export default ErrorFallback;
