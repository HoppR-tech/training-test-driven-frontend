import {useState} from 'react'
import {Button} from "../stories/Button";

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <Button label={"" + count} primary={true} onClick={() => setCount((count) => count + 1)}>
        </Button>
    )
}

export default Counter;