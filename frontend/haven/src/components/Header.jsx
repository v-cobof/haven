import havenLogo from '../havenLogo.png'
import {} from '../css/Header.css'
// usar a imagem 

const Header = () => {
  return (
    <div className='header'>
      <img src={havenLogo} className="App-logo" alt="logo" />
      <span>Sobre nós</span>
    </div>
  );
}

export default Header;