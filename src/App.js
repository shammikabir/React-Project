

import './App.css';
import login from './Pages/Admin/login.css';
import Navbar from './Component/Navbar';

import AdminLogin from './Pages/Admin/AdminLogin';
import Teacher from './Pages/Teacher';
import Student from './Pages/Student';
import Dashboard from './Pages/Admin/Dashboard';
import Logout from  './Pages/Admin/Logout';
import {BrowserRouter ,Routes,Route} from "react-router-dom";



function App() {
  return (

    <BrowserRouter>
    
   <Navbar></Navbar>
    <Routes>
    
    <Route path="/Admin" element={<AdminLogin/>} />
    <Route path="/Teacher" element={<Teacher/>} />
    <Route path="/Student" element={<Student/>} />
    <Route path="/Dashboard" element={<Dashboard/>} />
    <Route path="/Logout" element={<Logout/>} />

    </Routes>
    
    
    
    </BrowserRouter>

  
  );
}

export default App;
