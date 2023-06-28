import img from '../assets/shoe1.webp'
import { useContext } from 'react';
import { steezeContext } from '../App';

const EachCartItem = () => {
    const {cart, deleteCartItem, decreaseQuantity, increaseQuantity} = useContext(steezeContext)

    
    return ( 
        <div className="cart-container">
            {cart.map(cartItem => ( 
            <div className="cart-card" key={cartItem.id } data-aos='zoom-in' data-aos-duration='500'>
                <div className="cart-img">
                    <img src={img} alt="" />
                </div>

                <div className="cart-desc">
                    <div>
                        <p className='title'> {cartItem.title} </p>
                        <p className='price'>${cartItem.price}</p>
                    </div>
                    
                    <div className='cart-actions'>
                        <div>
                            <button onClick={() => decreaseQuantity(cartItem.id) }>
                                <i className="fa fa-minus"></i>
                            </button>

                            <span className="quantity">{cartItem.quantity}</span>

                            <button onClick={() => increaseQuantity(cartItem.id) }>
                               <i className="fa fa-plus"></i>
                            </button>

                        </div>

                        <button className='trash-btn' onClick={() => deleteCartItem(cartItem.id)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </div>
            </div>
            ))}
        </div>

     );
}
 
export default EachCartItem;

