import Sidebar from '@twidge/components/sidebar';
import { styled } from '@twidge/config/stitches.config';

const Root = styled('div', {
  backgroundColor: '$backgroundColor',
  color: '$textColor',
  minWidth: '100vw',
  minHeight: '100vh',
  width: '100%',
  height: '100%',
});

function App() {
  return (
    <Root>
      <Sidebar />
    </Root>
  );
}

export default App;
