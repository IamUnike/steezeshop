import OrderOverview from './OrderOverview';
import EachCartItem from './EachCartItem';
import { useContext } from 'react';
import { steezeContext } from '../App';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart} = useContext(steezeContext)

    return ( 
        <div>
            <section className="cart-section">
                <h3>My Cart</h3> <hr />

               {cart.length > 0 && 
                    <Link to='/products'>
                        <i className='fa fa-arrow-left' data-aos='fade-down' data-aos-duration='1300'> <span className="back">Back to Shop</span> </i> 
                    </Link>
                }

                {cart.length < 1 ?
                    <div className='empty-cart'>
                        <h3 data-aos='fade-right' data-aos-duration='500'> Your cart is empty! </h3>
                        <Link to='/products'>
                            <button className='secondary-btn' data-aos='fade-left' data-aos-duration='700'>Visit Shop <i className='fa fa-arrow-right'></i></button>
                        </Link>
                    </div>
                    :
                    <>
                        <EachCartItem /> 
                        <OrderOverview /> 
                    </>
                }
            </section>
        </div>
     );
}
 
export default Cart;


