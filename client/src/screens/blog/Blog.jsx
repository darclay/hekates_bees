import './Blog.css';
import Navigation from '../../components/layout/Navigation.jsx';
import flower from '../../assets/pictures/bee_flower.jpg';
// import LoginUser from '../../components/layout/LoginUser.jsx'
import { Link } from 'react-router-dom';














const Blog = ({handleLogout}) => {
  return ( 
    <div className="blogDiv">  
        <div className="blogFlexContainer">
            <div className="blogLeftDiv"></div>
            
            <div className="blogRightDiv"style={{ backgroundImage: `url(${flower})` }}>
            <div className="topDiv">
      {/* {currentUser ? 
          (<div><p>{currentUser.username}</p><button onClick={handleLogout}>Logout</button></div>)
          :
          (<Link to='/login'>Login/Register</Link>)
        } */}

        <Link to='/login'><button>login</button></Link>
        <button onClick={handleLogout}>logout</button>
    </div>
            </div>
        </div>
    <Navigation/>
    </div>
   );
}
 
export default Blog;