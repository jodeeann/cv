import './App.css';
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';

function App() {
  return (
    <Router basename='cv'>
    <div>
      <header>
        <h1 className='text-center'>Jodee Ann Conui</h1>
        <h2 className='text-center'>B.A. Psychology</h2>
        <h2 className='text-center'>ARCS Fellow</h2>
        <h2 className='text-center'>Contact Information</h2>
      </header>
      <body>
        <h3>Education</h3>
        <h3>Certifications</h3>
        <h3>Honors and Awards</h3>
        <h3>Research Experience</h3>
        <h3>Professional Organizations</h3>
      </body>
    </div>
    </Router>
  );
}

export default App;
