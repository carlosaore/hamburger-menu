import React, { useState, useRef } from 'react';
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { useOnClickOutside } from './hooks';
import { Burger, Menu } from './components';
import BigNavbar from "./components/BigNavbar"
import Team from "./components/Team";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false))
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node} className="burger-menu">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <div className="big-navbar">
          <BigNavbar />
        </div>
        <Switch>
          <Route
            exact path="/"
            render={props =>
              <Home {...props} />
            }
          />  
          <Route
            path="/about"
            render={props =>
              <About {...props} />
            }  
          />
          <Route
            path="/team"
            render={props =>
              <Team {...props} />
            }
          />
        </Switch>
      </>
    </ThemeProvider>
  );
}
export default App;
