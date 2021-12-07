import './App.css';
import Login from './containers/Login';
import Register from './containers/Register';
import Dashboard from './containers/Dashboard';
import Pending from './containers/Pending';
import ApproveDB from './containers/ApproveDB';
import RejectDB from './containers/RejectDB';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/pending" element={<Pending />} />
        <Route path="/approved" element={<ApproveDB />} />
        <Route path="/rejected" element={<RejectDB />} />
      </Routes>
    </Router>
  );
}

export default App;
