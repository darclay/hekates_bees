import './OneProduct.css';
import Navigation from '../../components/layout/Navigation.jsx';
import bee from '../../assets/pictures/golden_bee.jpg';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/product.js';
import { useState, useEffect } from 'react';

const OneProduct = () => {
  
  let {id} = useParams();
  
  const [ product, setProduct] = useState();
  
  useEffect(() => {
    const fetchProduct = async () => {
      const aProduct = await getProduct(id);
      setProduct(aProduct);
    };
    fetchProduct();
  },[id]);
  
  return ( 
    <div className="productsDiv">
          <div className="productsBackgroundDiv" style={{ backgroundImage: `url(${bee})` }}>
                
                
                <div className="oneProductLeftDiv">
                    {product ?  
                    <div className="productDetail">
                        <h3>{product.id}</h3>
                        <img src={product.img_url} alt="product picture"/>
                        <p className="pDescription">{product.description}</p>
                        <p className="pPrice">{product.price}</p>
                    </div>
                    :
                    null
                    }
                </div>
              
                <div className="oneProductRightDiv">
                    <h1>HEKATES BEE PRODUCTS</h1>
                    
                </div>
          </div>  
          
          <Navigation />
    </div>
   );
}
 
export default OneProduct;