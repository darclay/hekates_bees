import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({handleLogin},) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };  
  
  return ( 
    <div className="loginDiv">
    <form className="loginForm" onSubmit={(ev)=> {
      ev.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      <label>
        Username:
        <br/>
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <br/>
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <Link to='/create-user'><button>register</button></Link>
      <button>Submit</button>
      <Link to='/'><button>back to home</button></Link>
    </form>
    </div>
   );
}
 
export default Login;
