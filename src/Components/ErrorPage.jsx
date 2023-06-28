import { Link } from "react-router-dom";

const ErrorPage = () => {
    return ( 
        <div>
            <section className="error-page-section">
                <div>
                    <h2> 404 Error Page </h2>

                    <Link to='/'>
                        <button className='secondary-btn' > Back to Home <i className='fa fa-arrow-right'></i></button>
                    </Link>
                </div>
            </section>
        </div>
     );
}
 
export default ErrorPage;