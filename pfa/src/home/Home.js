import Header from '../header/Header';
import Footer from '../footer/Footer';
import Demande from '../demande/Demande';

function Home() {
  return (
    <div className="App">
      <Header/>
      <Demande/>
      <Footer/>
    </div>
  );
}

export default Home;
