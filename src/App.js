
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import LawPassport from './Pages/lawPassport';
import Ryder from './Pages/Ryder'
import Homeroom from './Pages/Homeroom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index  element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path='/law-passport' element= {<LawPassport/>} />
          <Route path='/ryder' element= {<Ryder/>} />
          <Route path='/homeroom' element= {<Homeroom/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
