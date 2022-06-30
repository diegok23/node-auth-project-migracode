import React, { useState } from 'react';
import { signUp } from '../api';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isError, setIsError] = useState(false);
  let body = ''

  const signUpUser = async (e) => {
    e.preventDefault();
    body = await signUp(userName, email, password);
    console.log(body);
    body.isAuthenticated && setIsSignedUp(true);
    body.error && setIsError(true)
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
          {isSignedUp ? <div className="formResponse">You're registered</div> : <div>{body.error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Form;
