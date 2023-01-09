import logo from './logo.svg';
import './App.css';
import './Main_Body.css';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import FirstPage from './ListOfPages/FirstPage';
import SecondPage from './ListOfPages/SecondPage';
import ThirdPage from './ListOfPages/ThirdPage';
import FourthPage from './ListOfPages/FourthPage';
import Footer from './Footer';


/** I havent added the font required for the test as font facing wasnt working.
 * 
 *  Also I couldnt use single prop as unlike "Next js", "React" shows a "critical dependency error" that 
 * 
 *  after looking into it. found out that its something "react" needs to fix.
 */


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Navbar/>
         <SearchBar/>
      </header>
      <main className="main_body">
        <FirstPage/>
        <SecondPage/>
        <ThirdPage/>
        <FourthPage/>
      </main>
      <footer>
          <Footer/>
      </footer>
    </div>
  );
}

export default App;
