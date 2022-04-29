import havenLogo from '../havenLogo.png';

const Header = () => {
  return (
    <header>
      <img src={havenLogo} className="App-logo" alt="logo" />
      <span>Sobre nós</span>
    </header>
  );
}

export default Header;