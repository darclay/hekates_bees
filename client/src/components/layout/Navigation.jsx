import './Navigation.css';
import bee from '../../assets/icons/bee.png';
import product from '../../assets/icons/product.png';
import blog from '../../assets/icons/file.png';
import { useState } from 'react';

const Navigation = () => {
  const [ active, setActive] = useState('');

 const list = document.getElementsByClassName("list");

  const handleClick = (val) => {
  for (let i = 0; i < list.length; i++){
    console.log(list[i]);
    // list[i].classList.remove("active");
    // val.classList.add("active");
  }
  }
  



  return ( 
    <div className="navigation">
      <ul>

        <li className="list active" onClick={handleClick}>
          <a href="#">
            <span className="icon"><img id="package" src={product} alt="product icon"/></span>
            <span className="text">PRODUCTS</span> 
          </a>
        </li>
        
        <li className="list" onClick={handleClick}>
          <a href="#">
            <span className="icon"><img id="bee" src={bee} alt="bee icon"/></span>
            <span className="text">HOME</span> 
          </a>
        </li>

        <li className="list" onClick={handleClick}>
          <a href="#">
            <span className="icon"><img id="blog" src={blog} alt="blog icon"/></span>
            <span className="text">BLOG</span> 
          </a>
        </li>
        <div className="circle"></div>
      </ul>
    </div>
   );
}
 
export default Navigation;