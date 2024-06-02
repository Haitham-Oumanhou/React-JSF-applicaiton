import AjouterDemandeJsf from './demande/AjouterDemandeJsf';
import AjouterDemande from './demande/AjouterDemande'; 
import ListeDemandes from './demande/ListeDemandes';
import RechercherDemandeJsf from './demande/RechercherDemandeJsf';
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
            <Route path="/search" element={<RechercherDemandeJsf />} />

            <Route path="/addjsf" element={<AjouterDemandeJsf />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
