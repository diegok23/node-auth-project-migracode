import React, { useState } from 'react';
import { signIn } from '../api';
import Home from './Home';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigned, setIsSigned] = useState(false);
  const [isSignError, setIsSignError] = useState(false);

  const signInUser = async (e) => {
    e.preventDefault();
    const body = await signIn(email, password);
    console.log(body);
    if (body.isAuthenticated) {
      setIsSigned(true);
    } else {
      setIsSignError(true);
    }
  };

  return (
    <>
      {!isSigned ? (
        <>
          <h1>Sign In Form</h1>
          <div className="mainContainer">
            <form className="formContainer">
              <input className="form-field" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="form-field" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button onClick={signInUser} className="button">
                Sign In
              </button>
              {isSignError && (<div className='formResponse'>Invalid Credentials</div>)}
            </form>
          </div>
        </>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Form;
