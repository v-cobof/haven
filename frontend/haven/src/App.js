import './css/App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Routes from "./Routes";



function App() {

  return (
    <>
      <Header/>
        <body>
          <Routes/>
        </body>

    </>
  );
}

export default App;