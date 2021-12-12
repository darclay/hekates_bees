import './Home.css';
import Layout from '../../components/layout/Navigation.jsx';
import background from '../../assets/pictures/grass.jpg';

const Home = () => {
  return ( 
    <div className="Home">
    <div className="homeDiv" style={{ backgroundImage: `url(${background})` }}>
    <div className="flexContainer">
    <div className="leftDiv">
    <h1 className="homeTitle">HEKATES BEES</h1>
    </div>
    <div className="rightDiv">
    <p className="homeIntro">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>  
    </div>
    </div>
    </div>
    <Layout />
    </div>
   );
}
 
export default Home;