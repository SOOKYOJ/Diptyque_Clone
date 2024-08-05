import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import All from '../Pages/1_ALL';
import Perfume from '../Pages/2_PERFUME';
import Bodycare from '../Pages/3_BODYCARE';
import Haircare from '../Pages/4_HAIRCARE';
import Homefragrance from '../Pages/5_HOMEFRAGRANCE';
import Lifecare from '../Pages/6_LIFECARE';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/All" element={<All />} />
        <Route path="/Perfume" element={<Perfume />} />
        <Route path="/Body" element={<Bodycare />} />
        <Route path="/Hair" element={<Haircare />} />
        <Route path="/Fragrance" element={<Homefragrance />} />
        <Route path="/Life" element={<Lifecare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
