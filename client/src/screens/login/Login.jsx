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
    <form onSubmit={(ev)=> {
      ev.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      <label>
        Username:
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
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <Link to='/create-user'>Register</Link>
      <button>Submit</button>
    </form>
   );
}
 
export default Login;
