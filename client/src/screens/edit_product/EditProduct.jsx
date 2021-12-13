import './EditProduct.css';
import { useParams } from 'react';
// import { useState, useParams, useEffect } from 'react';
// import { getProduct, putProduct } from '../../services/product.js';
// import { Navigate } from 'react-router-dom';


const EditProduct = () => {
  let { id } = useParams();
  console.log(id);
  
  // const [formData, setFormData] = useState({
  //   name: '',
  //   description: '',
  //   price: '',
  //   img_url: '',
  // })
  
  // const [isUpdated, setIsUpdated] = useState(false);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const product = await getProduct(id);
  //     setFormData(product);
  //   };
  //   fetchProduct();
  // }, [id]);
  
  // const handleChange = (ev) => {
  //   const { name, value } = ev.target
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   })
  // };

  // const handleSubmit = async (ev) => {
  //   ev.preventDefault();
  //   const updated = await putProduct(id, formData);
  //   setIsUpdated(updated);
  // };

  // if (isUpdated) {
  //   return <Navigate to={`/product/${id}`} />;
  // }
  
  
  
  return ( 
    <div className='editDiv'>

        {/* <form id="editForm" onSubmit={handleSubmit}>
        
          <img className="imgurl" src={formData.img_url} onChange={handleChange} />
          
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

                <button type="submit" className="save-button">Save</button>
          </div>

        </form> */}
  
  </div>
   
   
   
   
   
   
   
   );
}
 
export default EditProduct;