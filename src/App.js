import './App.css';
import Header from './Header';
import IntroSection from './IntroSection';
import ProjectsSection from './ProjectsSection';

function App() {
  document.title = "Jaymin West";
  return (
    
    <div className="App">
      <Header />
      <IntroSection />
      <ProjectsSection />
    </div>
  );
}


export default App;
