import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>


      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
