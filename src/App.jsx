import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index/index.jsx';
import Error404 from './pages/404/404.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

console.log(Navbar);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Index /> } exact />
          <Route path="*" element={ <Error404 /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
