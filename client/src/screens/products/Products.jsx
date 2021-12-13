import './Products.css';
import Navigation from '../../components/layout/Navigation.jsx';
import bee from '../../assets/pictures/golden_bee.jpg';

const Products = ({products}) => {
  console.log({products});
  return (  
    <div className="productsDiv">
          <div className="productsBackgroundDiv" style={{ backgroundImage: `url(${bee})` }}>
                
                
                <div className="productsLeftDiv">
                  <p>left div</p>
                    {products ?
                    products.map((product) => (
                    <div key={product.id}>
                      <p>{product.name}</p>
                      <p>hello</p>
                    </div>))
                    :
                    null
                    }
                    
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