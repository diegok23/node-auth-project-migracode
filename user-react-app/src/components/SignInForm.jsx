import React, { useState } from 'react';
import {signIn} from '../api';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInUser = async (e) => {
    e.preventDefault();
    const body = await signIn(email, password);
    console.log(body);
  };

  return (
    <div>
      <h1>Sign In Form</h1>
      <div className="mainContainer">
        <form className="formContainer">
          <input className="form-field" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="form-field" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={signInUser} className="button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
