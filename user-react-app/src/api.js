async function signUp(userName, email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: userName, email: email, password: password })
  };
  const response = await fetch('http://localhost:4000/user/sign-up', requestOptions);
  const body = await response.json();
  return body;
}

async function signIn(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password })
  };
  const response = await fetch('http://localhost:4000/user/sign-in', requestOptions);
  const body = await response.json();
  return body;
}

export { signUp, signIn };
