import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const {cart, clearCart, children} = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const taxString = (total * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping: $ {shipping}</p>
            <p>Tax: $ {tax}</p>
            <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
            {/* <button className='btn-clear' onClick={clearCart}>
                <p>Clear Cart</p>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button> */}
            {children}
        </div>
    );
};

export default Cart;