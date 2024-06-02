import AjouterDemandeJsf from './demande/Test';
import AjouterDemande from './demande/AjouterDemande'; 
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

            <Route path="/addjsf" element={<AjouterDemandeJsf />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
