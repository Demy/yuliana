import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProjectPage from './pages/ProjectPage';
import ProjectsPage from './pages/ProjectsPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { lightBlue, purple } from '@mui/material/colors';
import { AppBar, Box, Container, CssBaseline } from '@mui/material';
import Header from './components/ui/Header';

const options:ThemeOptions = {
  palette: {
    primary: purple,
    secondary: lightBlue,
  },
};
const theme = createTheme(options);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ 
            mt: 10, 
            mb: 4 
          }}>
            <CssBaseline />
            <AppBar />
            <Router>
              <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/project/:id" element={<ProjectPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
              </Routes>
            </Router>
          </Container>
        </Box>
      </ThemeProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
