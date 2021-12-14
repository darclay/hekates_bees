import './Blog.css';
import Navigation from '../../components/layout/Navigation.jsx';
import flower from '../../assets/pictures/bee_flower.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Blog = ({handleLogout, posts, handleCreatePosts}) => {
    
    // handle Form Change ----------------------------------
    const [formData, setFormData] = useState({
      title: '',
      content: '',
  })
  
  const handleChange = (ev) => {
    const { name, value } = ev.target
    setFormData({
      ...formData,
      [name]: value,
    })
  };

  return ( 
    <div className="blogDiv">  
        <div className="blogFlexContainer">
            <div className="blogLeftTopDiv">
                <div className="blogPost">
                    <form id="createBlogForm" 
                      onSubmit={(ev) => {
                        ev.preventDefault();
                        handleCreatePosts(formData);
                      }}>

                        <h3>ADD A TITLE</h3>
                        <label>
                          <input 
                          type='text' 
                          placeholder='title'
                          name='title' 
                          value={formData.title} 
                          onChange={handleChange} 
                          />
                        </label>

                        <label>
                          <input
                          type='text' 
                          placeholder='content'
                          name='content' 
                          value={formData.content} 
                          onChange={handleChange} 
                          />
                        </label>
                      
                        <button>submit</button>
                    </form>
                </div>
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