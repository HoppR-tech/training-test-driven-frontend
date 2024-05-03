import { useState } from 'react'
import './App.css'
import {Button} from "./stories/Button.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Button label={"" + count} primary={true} onClick={() => setCount((count) => count + 1)}>
        </Button>
    </>
  )
}

export default App
