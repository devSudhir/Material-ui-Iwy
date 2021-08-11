import { Grids } from "./Components/Grids";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import "./styles.css";
import { useState } from "react";
import purple from "@material-ui/core/colors/purple";
import brown from "@material-ui/core/colors/brown";
import { Navbar } from "./Components/Navbar";
import { Modals } from "./Components/Modals";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: red[500]
      },
      secondary: {
        main: green[500]
      }
    }
  });
  const newTheme = createMuiTheme({
    palette: {
      primary: {
        main: purple[500]
      },
      secondary: {
        main: brown[500]
      }
    }
  });
  const [changeTheme, setChangeTheme] = useState(false);
  return (
    <>
      <button onClick={() => setChangeTheme(!changeTheme)}>Change Theme</button>
      <ThemeProvider theme={changeTheme ? newTheme : theme}>
        <Navbar />
        <Modals />

        <div className="App">
          <Grids />
        </div>
      </ThemeProvider>
    </>
  );
}
