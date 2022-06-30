import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import Landing from './components/Landing';

//<Route path="/" element={<Home />} />
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/SignInForm" element={<SignInForm />} />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route path="/Landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
