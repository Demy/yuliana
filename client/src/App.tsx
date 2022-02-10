import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './pages/LoginPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
