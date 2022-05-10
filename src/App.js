import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Teachers from './Pages/Teachers';
import Video from './Pages/Video.jsx';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/teacher" element={<Teachers/>} />
          <Route exact path="/video" element={<Video/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
