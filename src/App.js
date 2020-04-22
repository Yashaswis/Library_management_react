import React from 'react';
import './App.css';
import RouterComponent from "./components/RouterComponent";
import NavBar from "./components/Navbar";
import Container from '@material-ui/core/Container';

function App() {
  return (
      <div>
          <NavBar/>
          <Container>
                <RouterComponent />
          </Container>
      </div>
  );
}

export default App;
