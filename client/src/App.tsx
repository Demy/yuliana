import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProjectPage from './pages/ProjectPage';
import ProjectsPage from './pages/ProjectsPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { AppBar, Box, Container, CssBaseline } from '@mui/material';
import Header from './components/ui/Header';
import ScrollToTop from './components/ui/ScrollToTop';

const options:ThemeOptions = {
  palette: {
    primary: purple,
    secondary: {
      main: '#4caf50',
      dark: '#357a38',
      light: '#6fbf73',
      contrastText: 'white'
    },
  },
};
const theme = createTheme(options);

function App() {
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <ScrollToTop />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              minHeight: '100vh',
              overflow: 'auto',
            }}
          >
            <Container maxWidth="lg" sx={{ 
              mt: 10, 
              mb: 4 
            }}>
              <CssBaseline />
              <AppBar />
              <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/project/:id" element={<ProjectPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
              </Routes>
            </Container>
          </Box>
        </Router>
      </ThemeProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
