import './CreateProduct.css';
import Navigation from '../../components/layout/Navigation.jsx';
import bee from '../../assets/pictures/golden_bee.jpg';
import { useState, useEffect } from 'react';
import { createProduct } from '../../services/product.js';

const CreateProduct = () => {
// handle fade ------------------------------------
const [fade, setFade] = useState('');

useEffect(() => {
  const timeout = setInterval(() => {
      if(fade === 'fade-in'){
        setFade('fade-out')
      }else {
        // setFadeObject({fade:'fade-in'})
      }
  }, 2000)

  return () => clearInterval(timeout)
},[fade])

// handle submit ----------------------------------
  const [formData, setFormData] = useState({
      name: '',
      description: '',
      price: '',
      img_url: '',
  })

  const [isCreated, setCreated] = useState(false);

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setFormData({
      ...formData,
      [name]: value,
    })
  };
  
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const created = await createProduct(formData);
    setCreated(created);
    setFade('fade-in');
  }

  const showCreated = () => {
    if (isCreated) {
      return "item created"
    }else {
      return ""
    }
}

//handle reset ------------------------------------
  const [reset] = useState({
      name: '',
      description: '',
      price: '',
      img_url: '',
  })

  const handlereset = () => {
      console.log('reset');
      setFormData(reset);
  }


  return ( 
       
    <div className="createProductDiv">
          <div className="productsBackgroundDiv" style={{ backgroundImage: `url(${bee})` }}>

                <div className="createProductLeftDiv">
                      <form id="createForm" onSubmit={handleSubmit}>

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
                      
                      <p className={fade}>{`${showCreated()}`}</p>
                </div>
              
                <div className="createProductRightDiv">
            
                </div>
          </div>  
          
          <Navigation />
    </div>
   );
}
 
export default CreateProduct;