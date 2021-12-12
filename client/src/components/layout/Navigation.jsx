import './Navigation.css';
import bee from '../../assets/icons/bee.png';
import product from '../../assets/icons/product.png';
import blog from '../../assets/icons/file.png';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return ( 
    <div className="navigation">
      <ul>

        <li className={`list ${location.pathname === '/products' ? "active" : ""}`} >
          <a href="/products">
            <span className="icon"><img id="package" src={product} alt="product icon"/></span>
            <span className="text">PRODUCTS</span> 
          </a>
        </li>
        
        <li className={`list ${location.pathname === '/' ? "active" : ""}`} >
          <a href="/">
            <span className="icon"><img id="bee" src={bee} alt="bee icon"/></span>
            <span className="text">HOME</span> 
          </a>
        </li>

        <li className={`list ${location.pathname === '/blog' ? "active" : ""}`} >
          <a href="/blog">
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