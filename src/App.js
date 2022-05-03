import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Pridmety from './Pages/Pridmety.jsx';
import Teachers from './Pages/Teachers';
import Contacts from './Pages/Contacts';


function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/pridmety" element={<Pridmety/>} />
          <Route exact path="/teacher" element={<Teachers/>} />
          <Route exact path="/contacts" element={<Contacts/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
