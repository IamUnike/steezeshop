import { useContext } from "react";
import { Link } from "react-router-dom";
import { steezeContext } from "../App";

const Header = () => {
    const {cart} = useContext(steezeContext)
    return ( 
        <header>
            <section className="nav-section">
                <Link to='/'>
                    <h3 data-aos='fade-down' data-aos-duration='500'> Steeze </h3>
                </Link>
                
                <Link to='cart' className="cart"  data-aos='fade-down' data-aos-duration='700'>
                    <span className="cart-count"> {cart.length} </span>
                    <i className="fa fa-shopping-cart"></i>
                </Link>
            </section>
        </header>
     );
}
 
export default Header;