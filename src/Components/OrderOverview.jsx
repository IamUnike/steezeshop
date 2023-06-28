import { useContext } from 'react';
import { steezeContext } from '../App';
import { Link } from 'react-router-dom';

const OrderOverview = () => {
  const {subtotal, total} = useContext(steezeContext);

  return (
    <div className="cart-overview" data-aos='zoom-in' data-aos-duration='800'>
      <h3>Order Info</h3>

      <div>
        <div className="subtotal">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>

        <div className="shipping">
          <p>Shipping</p>
          <p>$10</p>
        </div>

        <div className="total">
          <p>Total</p>
          <p>${total}</p>
        </div>
      </div>
      
      <Link to='/checkout'>
          <button className="secondary-btn" >Checkout (${total})</button>
      </Link>
 
    </div>
  );
};

export default OrderOverview;
