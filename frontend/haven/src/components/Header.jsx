import havenLogo from '../havenLogo.png';

const Header = () => {
  return (
    <div className='header'>
      <img src={havenLogo} className="App-logo" alt="logo" />
      <span>Sobre nós</span>
    </div>
  );
}

export default Header;