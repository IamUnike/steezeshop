import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { steezeContext } from "../App";

const MobileMenu = () => {
    const {navState, setNavState, resetNavState} = useContext(steezeContext)
    
    return ( 
        <>
            <div className="mobile-menu" >
                {navState && <ul>
                    <NavLink to='/' onClick={resetNavState}> 
                        <li>Home</li> 
                    </NavLink>

                    <NavLink to='products' onClick={resetNavState}> 
                        <li>Products</li> 
                    </NavLink>

                    <NavLink to='cart' onClick={resetNavState}> 
                        <li>Cart</li> 
                    </NavLink>

                </ul>}

                <div className="mobile-nav" onClick={() => setNavState(!navState)} >
                    { !navState ? <i className="fa fa-bars"></i> : <i className="fa fa-close"></i> }
                </div>
            </div>
            
        </>
        

     );
}
 
export default MobileMenu;