import Sidebar from '@twidge/components/sidebar'
import { styled } from '@twidge/config/stitches.config'
import { invoke } from '@tauri-apps/api/tauri'
import { useEffect } from 'react'

const Root = styled('div', {
  backgroundColor: '$backgroundColor',
  color: '$textColor',
  minWidth: '100vw',
  minHeight: '100vh',
  width: '100%',
  height: '100%'
})

function App() {
  useEffect(() => {
    invoke("my_custom_command")
  })
  return (
    <Root>
      <Sidebar />
    </Root>
  )
}

export default App;