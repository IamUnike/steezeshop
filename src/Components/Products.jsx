import { useContext } from 'react';
import shoe1 from '../assets/shoe1.webp';
import { steezeContext } from '../App';
import { Link } from 'react-router-dom';

const Products = () => {
  const {products} = useContext(steezeContext)
 
  return (
    <div>
      <section className="products-section">
        <h3>Products</h3> <hr />
        
        <div className="products-container">

            {products.map(product => (
                <div className="product-card" key={product.id} data-aos='zoom-in' data-aos-duration='700'>
                  <Link to={`/products/${product.id}`}>

                    <div className="product-image">
                        <img src={shoe1} alt="" loading="lazy" />
                    </div>

                    <div className="product-extra">
                            <p className="title">{product.title}</p>

                        <div>
                            <p>${product.price}</p> 
                            
                            <i className='fa fa-star'> {product.rating.rate} ({product.rating.count}) </i>
                        </div>
                    </div>
                    
                </Link>
                </div>
            ))}
            
        </div>
      </section>
    </div>
  );
};

export default Products;


