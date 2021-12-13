import './Products.css';
import Navigation from '../../components/layout/Navigation.jsx';
import bee from '../../assets/pictures/golden_bee.jpg';
import { Link } from 'react-router-dom';

const Products = ({products}) => {
  
  return (  
    <div className="productsDiv">
          <div className="productsBackgroundDiv" style={{ backgroundImage: `url(${bee})` }}>
                
                
                <div className="productsLeftDiv">
                  <p>left div</p>
                    
                    {products
                    ?
                    products.map((product) => (
                    <div key={product.id}>
                      <Link to={`/product/${product.id}`}>
                        <h3>{product.name}</h3>
                        <img src={product.img_url} alt="product"/>
                        <p>{`$${product.price}`}</p>
                        <p>hello</p>
                      </Link>
                    </div>
                    ))
                    :
                    null
                    }
                    
                </div>
              
                <div className="productsRightDiv">
                    <h1>HEKATES BEE PRODUCTS</h1>
                    <Link to="/create-product"><button className="goToCreate">Create a Product</button></Link>
                </div>
          </div>  
          
          <Navigation />
    </div>
  );
}
 
export default Products;