// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import Projects from './components/Projects';
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  return (
    <div className="page">
      <Header />
      <Profile />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
