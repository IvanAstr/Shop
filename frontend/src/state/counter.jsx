import { React, useState } from "react";
import Button from 'react-bootstrap/Button';

function Counter(props) {
    const [countPrice, setCount] = useState(1);

    const incriment = () => {
        setCount(countPrice + 1);
    }
    const dicriment = () => {
        if (countPrice > 1) {
            setCount(countPrice - 1);

        }
    }
    const cost = props.price * countPrice;

    return (
        <>
            <div className="ss">Количество: {countPrice}</div>
            <div className="ss">Цена: {cost} р.</div>


            <Button variant="primary" onClick={() => incriment()} >+</Button>
            <Button variant="primary" onClick={() => dicriment()}>-</Button>
        </>
    )
}

export default Counter;
