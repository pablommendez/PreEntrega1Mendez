import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

function CartWidget () {
    return(
        <div className= "CartWidget">
            <i className="numero">1</i> 
            <FaShoppingCart/>
        </div> 
    )
}

export default CartWidget