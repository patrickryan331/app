import {useState} from 'react';
import "./styles/quantityPicker.css";

function QuantityPicker(){
    const [quantity, setQuantity] = useState(0);

    function decrease(){
        console.log("Decrease button clicked");
        if(quantity <= 0) return;  // Stop decrease if quantity is 0 or less
        let val = quantity - 1;
        setQuantity(val);
    }

    function increase(){
        console.log("Increase button clicked");
        let val = quantity + 1;
        setQuantity(val);
    }


        return (
            <div className="qt-picker">
                <button disabled={quantity === 0} onClick={decrease}>-</button>
                <label>{quantity}</label>
                <button onClick={increase}>+</button>
            </div>
        )
}


export default QuantityPicker; 