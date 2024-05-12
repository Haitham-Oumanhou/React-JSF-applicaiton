import Header from './header/Header';
import Footer from './footer/Footer';
import Demande from './demande/Demande';

import AjouterDemande from './demande/Test';
import ListeDemandes from './demande/ListeDemandes';
import RechercherDemande from './demande/RechercherDemande';
import Home from './home/Home';



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/list" element={<ListeDemandes />}/>
            <Route path="/add" element={<AjouterDemande />} />
            <Route path="/search" element={<RechercherDemande />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
