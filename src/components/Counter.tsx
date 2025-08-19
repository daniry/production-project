import { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div className={styles.block}>
            <div>{count}</div>
            <button onClick={increment}>Click me</button>
        </div>
    );
};

export default Counter;
