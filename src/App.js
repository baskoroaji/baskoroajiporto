import './App.css';
import Footer from './components/footer';
import Introduction from './components/intro';
import Navbar from './components/navbar';
import Works from './components/project';
import WorksExperience from './components/works';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className='animate-fadeIn font-montserrat'>
      <Navbar/>
      <div>
        <Introduction />
        <Works />
        <WorksExperience/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
