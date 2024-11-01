import './App.css';
import Introduction from './components/intro';
import Navbar from './components/navbar';
import Works from './components/project';
import WorksExperience from './components/works';

function App() {
  return (
    <div className='animate-fadeIn font-montserrat'>
      <Navbar/>
      <div>
        <Introduction />
        <Works />
        <WorksExperience/>
      </div>
    </div>
  );
}

export default App;
