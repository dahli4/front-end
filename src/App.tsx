import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from 'views/Authentication/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/auth'>
        <Route path='sign-up' element={<SignUp />}></Route>
      </Route>
    </Routes>
  )
}

export default App;
