import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';

import Profile from "./Profile";

const Header = ({ showSignIn, setShowSignIn, isLoggedIn, setIsLoggedIn }) => {

  const openSignInUp = () => {
    setShowSignIn(true);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>

          {isLoggedIn ? (
            <Profile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Button style={{color: "white"}} onClick={openSignInUp}>
              SignIn/SignUp
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;