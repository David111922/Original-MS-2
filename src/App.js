// MUI
import * as React from 'react';
import { Container } from '@mui/material';
import { TireProvider } from './context/TireContext';

// Components
import TireList from './components/TireList';
import NavBar from './components/NavBar';
import CartItems from './components/ShoppingCart';
import TireFilter from './components/TireFilter'
import TireCard from './components/TireCard';

function App() {
  return (
    <div>
      <NavBar />
      <Container sx={{
        border: '4px solid #b4e4fc',
        height: '100vh',
      }}>
        
        <TireProvider>
        <TireFilter />
          <CartItems /> 
          <TireList />
        </TireProvider>
      </Container>
    </div>
  );
}

export default App;
