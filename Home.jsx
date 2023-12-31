import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {  useGetAllProductsQuery } from "../features/productsApi";
import { addToCart } from "../features/cartSlice";
import { BrowserRouter as Router } from 'react-router-dom';
const Home = () => {
    const {data, error, isLoading} = useGetAllProductsQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAddToCart = (product) =>{
        dispatch(addToCart(product));
        navigate("/cart");
    };

    return (
        <div className="home-container">
            { isLoading ? (
                <p>Loading...</p>
             ) : error ? (
                <p>An error ocurred!</p> 
            ) : (
                <>
                <h2>Welcome to my page</h2>
                <div className="products">
                    {data?.map(product => <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <img src={product.image} alt={product.name}/>
                        <div className="details">
                            <span>{product.desc}</span>
                            <span className="price">${product.price}</span>
                        </div>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>)}
                </div>
                </>
            )}
        </div>
    );
}
 
export default Home;