import React, { useState } from 'react';
import {signUp} from '../api';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpUser = async (e) => {
    e.preventDefault();
    const body = await signUp(userName, email, password);
    console.log(body);
  };

  return (
    <div>
      <h1>Sign Up Form</h1>
      <div className="mainContainer">
        <form className="formContainer">
          <input className="form-field" type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <input className="form-field" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="form-field" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={signUpUser} className="button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
