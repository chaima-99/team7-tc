
import './App.css';
import LoginPage from './Components/Login_page';
import AccountProfile from './Components/HR/Account_infoHr';
import EditProfile from './Components/HR/EditProfileHr';
import RH from './Components/HR/newPageHr';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import employeesrh from './Components/HR/EmployeesHr';



function App() {
  return (
    <div className="App">
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Account" element={<AccountProfile/>} />
      <Route path="/EditProfile" element={<EditProfile/>} />

      {/* <Route path="dashboard" element={}/> */}
    </Routes>
      {/* <LoginPage /> */}
     {/* <AccountProfile/>
     <EditProfile/>
     <RH/> */}
  </Router>
  <employeesrh />
    </div>
  );
}

export default App;
