import { useState} from 'react';
function OnChange() {
    const [name, setName] = useState("Guest");
    const [quality, setQuality] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState(false)
    function handleChange(event) {
        setName(event.target.value)}
    function handleQualityChange(event) {
        setQuality(event.target.value)}
    function handleCommentChange(event) {
        setComment(event.target.value)
    
    }
    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }
    function handleShippingChange(event) {
        setShipping(event.target.checked)
    }

    return (
        <div>
            <input value={name} type="text" onChange={handleChange   } />
            <p>Hello, {name}!</p>
            <input value={quality} type="number" onChange={handleQualityChange   } />
            <p> {quality}</p>
            <input  placeholder="Enter your comment" value={comment} type="textarea" onChange={handleCommentChange   } />
            <p> {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select Payment Method</option>
                <option value="cash">Pay cash</option>
                <option value="credit">Credit card</option>
                <option value="debit">Debit card</option>
                <option value="bank">Bank transfer</option>
            </select>
            <p>Selected Payment Method: {payment}</p>
            <label>
                <input
                    type="checkbox"
                    checked={shipping}
                    onChange={handleShippingChange}
                />
                Shipping
            </label>
        </div>
    );
}
export default OnChange;