import React from 'react'
import Stats from './components/Stats'
import Selection from './components/Selection'
import Visualization from './components/Visualization'
//context
import { ContextProvider } from './context'

function App() {
  return (
    <ContextProvider>
      <Container>
        <Stats />
        <Selection />
        <Visualization />
      </Container>
    </ContextProvider>
  );
}

function Container({ children }) {
  return (<div className="max-w-6xl mx-auto text-gray-800"> {children} </div>)
}
export default App;