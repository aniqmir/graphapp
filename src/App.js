import React from "react";
import "./App.css";
import CustomRoutes from "./routes.js";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Open Sans"].join(",")
  }
  // palette: {
  //   secondary: {
  //     main: "#FFB6C1",
  //     contrastText: "#FFF"
  //   }
  // }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomRoutes />
    </ThemeProvider>
  );
}

export default App;
