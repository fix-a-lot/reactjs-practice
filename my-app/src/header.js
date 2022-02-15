import logo from './logo.svg';
import WelcomeText from './WelcomeText';
import ReactAPIsDOCLink from './ReactAPIsDOCLink';

function Header(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <WelcomeText/>
      <ReactAPIsDOCLink/>
    </header>
  );
}

export default Header;
