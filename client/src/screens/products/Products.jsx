import './Products.css';
import Navigation from '../../components/layout/Navigation.jsx';
import bee from '../../assets/pictures/golden_bee.jpg';

const Products = ({products}) => {
  
  return (  
    <div className="productsDiv">
          <div className="productsBackgroundDiv" style={{ backgroundImage: `url(${bee})` }}>
                <div className="productsLeftDiv">
                    products.map((item) => (
                        <div key={item.id}>
                            <p>{product.name}</p>
                        </div>
                </div>
              
                <div className="productsRightDiv">
                    <h1>HEKATES BEE PRODUCTS</h1>
                </div>
          </div>  
          
          <Navigation />
    </div>
  );
}
 
export default Products;