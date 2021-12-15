import './EditProduct.css';
import { useState, useEffect } from 'react';
import { getProduct, putProduct } from '../../services/product.js';
import { Navigate, useParams } from 'react-router-dom';
import bee from '../../assets/pictures/golden_bee.jpg';
import Navigation from '../../components/layout/Navigation.jsx';

const EditProduct = () => {
  let { id } = useParams();
    
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    img_url: '',
  })
  
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setFormData(product);
    };
    fetchProduct();
  }, [id]);
  
  const handleChange = (ev) => {
    const { name, value } = ev.target
    setFormData({
      ...formData,
      [name]: value,
    })
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const updated = await putProduct(id, formData);
    setIsUpdated(updated);
  };

  if (isUpdated) {
    return <Navigate to={`/product/${id}`} />;
  }
  
  
  
  return ( 
    <div className='editDiv'>
      <div className="productBackgroundDiv" style={{ backgroundImage: `url(${bee})` }}>
        <div className="greenBorder">
          <form id="editForm" onSubmit={handleSubmit}>
          
            <img className="imgurl" src={formData.img_url} alt="product" onChange={handleChange} />
            
            <div className='formDiv'>
                  <label>
                    <input 
                    type='text' 
                    placeholder='product name'
                    name='name' 
                    value={formData.name} 
                    onChange={handleChange} 
                    />
                  </label>

                  <label>
                    <input
                    type='text' 
                    placeholder='description'
                    name='description' 
                    value={formData.description} 
                    onChange={handleChange} 
                    />
                  </label>
                  
                  <label>
                    <input
                    type='text' 
                    placeholder='price'
                    name='price' 
                    value={formData.price} 
                    onChange={handleChange} 
                    />
                  </label>
                  
                  <label>
                    <input
                    type='text' 
                    placeholder='image url'
                    name='img_url' 
                    value={formData.img_url} 
                    onChange={handleChange} 
                    />
                  </label>
                  <br/>
                  <button type="submit" className="save-button">Save</button>
            </div>
          </form>
        </div>
      </div>
      <Navigation />
    </div>
   );
}
 
export default EditProduct;