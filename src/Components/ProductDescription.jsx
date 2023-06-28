import { useContext } from "react";
import { steezeContext } from "../App";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import img from '../assets/shoe1.webp'

const ProductDescription = () => {
    const {products, addToCart} = useContext(steezeContext)
    const {id} = useParams()

    return ( 
        <div>
            <section className="product-desc-section">
                <Link to='/products'>
                    <i className='fa fa-arrow-left' data-aos='fade-down' data-aos-duration='1300'> <span className="back">Back to Shop</span> </i> 
                </Link>
                
                <div className="product-desc-card" data-aos='zoom-in' data-aos-duration='500'>
                    <div className="product-desc-img">
                        <img src={img} alt="" data-aos='zoom-in' data-aos-duration='700'/>
                    </div>

                    <div className="product-desc-details" data-aos='zoom-in' data-aos-duration='700'>
                        <h3 className="title"> {products[id - 1].title} </h3>

                        <p> {products[id - 1].description} </p>
                        
                        <p className="price"> ${products[id - 1].price} </p>

                        <i className="fa fa-star"> {products[id - 1].rating.rate} ({products[id - 1].rating.count}) </i>

                        <Link to='/cart'>
                            <button className="secondary-btn" onClick={() => addToCart(products[parseInt(id, 10) - 1])}> Add to Cart </button>
                        </Link>
                        
                    </div>


                </div>
            </section>
        </div>
     );
}
 
export default ProductDescription;

