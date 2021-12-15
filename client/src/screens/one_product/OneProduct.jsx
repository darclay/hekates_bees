import './OneProduct.css';
import Navigation from '../../components/layout/Navigation.jsx';
import bee from '../../assets/pictures/golden_bee.jpg';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../../services/product.js';
import { useState, useEffect } from 'react';

const OneProduct = ({handleDelete}) => {
  let {id} = useParams();

  const [ product, setProduct] = useState();
  console.log(product)

  useEffect(() => {
    const fetchProduct = async () => {
      const aProduct = await getProduct(id);
      setProduct(aProduct);
    };
    fetchProduct();
  },[id]);
  
  return ( 
    <div className="productDiv">
          <div className="productBackgroundDiv" style={{ backgroundImage: `url(${bee})` }}>
                
                <div className="oneProductLeftDiv">
                    {product ?  
                    <div className="productDetail">
                      <div className="detail">
                          <h3>{product.name}</h3>
                          <img src={product.img_url} alt="product"/>
                          <p className="pDescription">{product.description}</p>
                          <p className="pPrice">{`$${product.price}`}</p>
                      </div>
                        
                      <div className="editAndDelete">
                          <Link to={`/edit-product/${id}`}><button>edit</button></Link>
                          <button onClick={() => handleDelete(id)}>delete</button>
                      </div>
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
