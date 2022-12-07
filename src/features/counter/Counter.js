import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0);

    /* Action */
    const increment = () => {
        setCounter((bla) => bla + 1);
    };

    return (
        <p>
            Counter: {counter} <button onClick={increment}>Increment</button>
        </p>
    );
}
