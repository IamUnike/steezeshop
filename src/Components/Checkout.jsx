import { useContext } from "react";
import { Link } from "react-router-dom";
import { steezeContext } from "../App";

const Checkout = () => {
    const {total, emptyCartOnCheckout} = useContext(steezeContext)

    return ( 
        <div>
            <section className="checkout-section" data-aos='zoom-in' data-aos-duration='500'>
                <div className="checkout-card" >
                    <h3> Payment of ${total} Successful </h3>

                    <i className="fa fa-check-circle"></i>

                    <Link to='/products'>
                        <button className='secondary-btn' onClick={emptyCartOnCheckout}> Continue Shopping <i className='fa fa-arrow-right'></i></button>
                    </Link>
                </div>
            </section>
        </div>
     );
}
 
export default Checkout;