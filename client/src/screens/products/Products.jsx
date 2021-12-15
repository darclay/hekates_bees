import './Products.css';
import Navigation from '../../components/layout/Navigation.jsx';
import bee from '../../assets/pictures/golden_bee.jpg';
import { Link } from 'react-router-dom';

const Products = ({products}) => {
  
  return (  
    <div className="productsDiv">
          <div className="productsBackgroundDiv" style={{ backgroundImage: `url(${bee})` }}>
                
                
                <div className="productsLeftDiv">           
                    {products
                    ?
                    products.map((product) => (
                    <div className='productCard'key={product.id}>
                      <Link to={`/product/${product.id}`}>
                        <div className="contentCard">
                        <h4>{product.name}</h4>
                        <img src={product.img_url} alt="product"/>
                        <p>{`$${product.price}`}</p>
                        </div>
                        </Link>
                        <button className="addToCart">add to cart</button>
                      
                    </div>
                    ))
                    :
                    null
                    }
                    
                </div>
              
                <div className="productsRightDiv">
                    <h1>HEKATE'S BEE PRODUCTS</h1>
                    <Link to="/create-product"><button className="goToCreate">Create a Product</button></Link>
                </div>
          </div>  
          
          <Navigation />
    </div>
  );
}
 
export default Products;