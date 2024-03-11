
import './App.css';
import PersonalInformation from './pages/PersonalInformation';
import { Route, Routes } from 'react-router-dom';
import Experience from './pages/Experience';
import Education from './pages/Education';
import About from './pages/About';
import Routers from './Routes/Routers';



function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center gap-14 '>
    <Routers/>
    </div>

  );
}

export default App;


 