import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <main className="home">
            <div className="bg-banner">
                
                <div className="bg-text">
                    <h2 data-aos='fade-up' data-aos-duration='500'> Elevate your style, <br /> embrace your elegance </h2>

                    <Link to='products'>
                        <button className="primary-btn" data-aos='zoom-in' data-aos-duration='700'>visit shop</button>
                    </Link>
                </div>
                
            </div> 
        </main>
     );
}
 
export default Home;