import './CreateUser.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateUser = ({handleRegister}) => {
   
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
    
    return (
      <div className="createUserDiv">
      <form
        className="createUserForm"
        onSubmit={(ev) => {
          ev.preventDefault();
          handleRegister(formData);
        }}
      >
        <h3>Register</h3>
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
          Email:
          <br/>
          <input
            type='text'
            name='email'
            value={email}
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
        <button>submit</button>
      </form>
      <Link to="/"><button>back to home</button></Link>
      </div>
   );
}
 
export default CreateUser;