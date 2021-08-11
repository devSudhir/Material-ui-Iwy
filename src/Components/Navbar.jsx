import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
export const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Home</Typography>
          <Button style={{ marginLeft: "auto" }} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
