import { useEffect, useState } from 'react';
import { AppBar, Container, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { MenuItem, Button, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const pages = [{ 
  title: 'Кто я?', 
  path: '/'
}, { 
  title: 'мои проекты',
  path: '/projects'
}, {
  title: 'На связи',
  path: '/contact'
}];

export default function Header() {
  
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e: any) => {
    e.preventDefault()
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = (e: any) => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <Link 
                  to={page.path} 
                  key={`pageS${index}`}
                  onClick={handleCloseNavMenu}
                >
                  <MenuItem>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Link 
                to={page.path} 
                key={`pageM${index}`}
                onClick={handleCloseNavMenu}
              >
                <Button sx={{  my: 1, mx: 1, color: 'white', display: 'block' }} >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}