import React from 'react'
import Container from './components/common/Container'
import Stats from './components/Stats'
import Selection from './components/Selection'
import Visualization from './components/Visualization'
import AndroidApp from './components/AndroidApp'
//context
import { ContextProvider } from './context'

function App() {
  return (
    <ContextProvider>
      <Container>
        <Stats />
        <Selection />
        <Visualization />
        <AndroidApp />
      </Container>
    </ContextProvider>
  );
}

export default App;