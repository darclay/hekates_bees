import './Blog.css';
import Navigation from '../../components/layout/Navigation.jsx';
import flower from '../../assets/pictures/bee_flower.jpg';
import { Link } from 'react-router-dom';
import AdminBlog from '../admin_blog/AdminBlog.jsx';

const Blog = ({handleLogout, posts}) => {
  return ( 
    <div className="blogDiv">  
        <div className="blogFlexContainer">
            <div className="blogLeftTopDiv">
              <AdminBlog />
            </div>
            <div className="blogLeftBottomDiv">
                {posts ?
                posts.map((post) => (
                    <div className="postCard" key={post.id}>
                      <h3>{post.title}</h3>
                      <p>{post.content}</p>
                    </div>))
                    :
                    null
                    }
            </div>

            <div className="blogRightDiv"style={{ backgroundImage: `url(${flower})` }}>
                <div className="topDiv">
                    <Link to='/login'>
                      <button>login</button>
                    </Link>
                    <button onClick={handleLogout}>logout</button>
                </div>
            </div>
        </div>
    
        <Navigation/>
    </div>
   );
}
 
export default Blog;