import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import Profile from "./Profile";

const Header = ({ showSignIn, setShowSignIn, isLoggedIn, setIsLoggedIn }) => {
  const openSignInUp = () => {
    setShowSignIn(true);
  };

  return (
    <AppBar
      position="static"
      className="appbar"
      style={{ background: "#8b19e3", margin: "0", padding: "0" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={require("./pen-logo.jpg")} alt="logo" className="icon" />
          <p className="title-name">WriteAway</p>
          {isLoggedIn ? (
            <Profile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Button
              style={{ color: "white", marginLeft: "auto" }}
              onClick={openSignInUp}
            >
              SignIn / SignUp{" "}
            </Button>
          )}{" "}
        </Toolbar>{" "}
      </Container>{" "}
    </AppBar>
  );
};

export default Header;
