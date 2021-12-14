import './CreateUser.css';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

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
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          handleRegister(formData);
        }}
      >
        <h3>Register</h3>
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
          Email:
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
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>














    

   );
}
 
export default CreateUser;