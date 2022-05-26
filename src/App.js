import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddReview from './components/Pages/Dashboard/AddReview';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyOrders from './components/Pages/Dashboard/MyOrders';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import RequireAuth from './components/Pages/Login/RequireAuth';
import Signup from './components/Pages/Login/Signup';
import Footer from './components/Pages/Shared/Footer/Footer';
import Navbar from './components/Pages/Shared/Navbar/Navbar';
import Purchase from './components/Purchase/Purchase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './components/Pages/Payment/Payment';
import ManageOrders from './components/Pages/Dashboard/ManageOrders';
import MakeAdmin from './components/Pages/Dashboard/MakeAdmin';
import Blogs from './components/Pages/Blogs/Blogs';
import MyPortfolio from './components/Pages/MyPortfolio/MyPortfolio';
import NotFound from './components/Pages/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/part/:partId' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='manageorders' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='users' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
