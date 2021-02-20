import logo from './logo.svg';
import './App.css';
import JS from './Hello/hello';
import Profile from './profile';
import Setup from './Setup/setup';


function App() {
  return (
    <>
      <JS />
      <Profile name={'A'} id={1001}/>
      <Profile name={'B'}id={1002}/>
      <Setup/>
    </>
  );
}

export default App;
