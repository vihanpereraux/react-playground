import { useState } from 'react'
import Home from './Home'
import './styles/Styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
