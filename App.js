import LoginForm from './Pages/LoginPage';
import Register from './Pages/RegPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
        <Routes>
        <Route path ="/" element={<LoginForm/>}/>
        <Route path ="/register" element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;
