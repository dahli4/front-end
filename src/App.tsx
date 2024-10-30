import OAuth from 'views/Authentication/OAuth';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from 'views/Authentication/SignIn';
import SignUp from 'views/Authentication/SignUp';
import Home from 'views/Home';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route path='' element={<Home />}></Route>
      </Route>
      <Route path='/auth'>
        <Route path='sign-up' element={<SignUp />}></Route>
        <Route path='sign-in' element={<SignIn />}></Route>
        <Route path='oauth-response/:token/:expirationTime' element={<OAuth />}></Route>
      </Route>
    </Routes>
  )
}

export default App;
