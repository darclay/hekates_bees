import './Blog.css';
import Navigation from '../../components/layout/Navigation.jsx';
import flower from '../../assets/pictures/bee_flower.jpg';
import LoginUser from '../../components/layout/LoginUser.jsx'

const Blog = () => {
  return ( 
    <div className="blogDiv">  
        <div className="blogFlexContainer">
            <div className="blogLeftDiv"></div>
            
            <div className="blogRightDiv"style={{ backgroundImage: `url(${flower})` }}>
            <LoginUser />
            </div>
        </div>
    <Navigation/>
    </div>
   );
}
 
export default Blog;