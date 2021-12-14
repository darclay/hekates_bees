import './CreateProduct.css';
import Navigation from '../../components/layout/Navigation.jsx';
import bee from '../../assets/pictures/golden_bee.jpg';
import { useState, useEffect } from 'react';

const CreateProduct = ({handleCreate}) => {

// handle Form Change ----------------------------------
  const [formData, setFormData] = useState({
      name: '',
      description: '',
      price: '',
      img_url: '',
  })

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setFormData({
      ...formData,
      [name]: value,
    })
  };
  
//handle reset ---------------------------------------
  const [reset] = useState({
      name: '',
      description: '',
      price: '',
      img_url: '',
  })

  const handlereset = () => {
      setFormData(reset);
  }

  return ( 
       
    <div className="createProductDiv">
          <div className="productsBackgroundDiv" style={{ backgroundImage: `url(${bee})` }}>

                <div className="createProductLeftDiv">
                      <form id="createForm" onSubmit={(ev) => {
                        ev.preventDefault();
                        handleCreate(formData);
                        }}>

                          <h3>ADD A PRODUCT</h3>
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

                          <button>submit</button>
                      </form>
                      <button onClick={handlereset}>reset</button>
                     
                </div>
              
                <div className="createProductRightDiv">
            
                </div>
          </div>  
          
          <Navigation />
    </div>
   );
}
 
export default CreateProduct;