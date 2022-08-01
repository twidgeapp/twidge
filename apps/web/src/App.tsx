import Sidebar from '@twidge/components/sidebar';
import { styled } from '@twidge/config/stitches.config';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/index";

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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Sidebar /> */}
    </Root>
  );
}

export default App;
