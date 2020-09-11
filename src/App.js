import React from 'react';
import styled from 'styled-components';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Toolbar from './components/Navigation/Toolbar'

const StyledMain = styled.main`
  margin-top: 100px;
`;

function App() {
  return (
    <div>

      {/* Navigation */}
      <Toolbar>
        
      </Toolbar>
      
      {/* Content */}
      <StyledMain>
        <BurgerBuilder />
      </StyledMain>
    
    </div>
    );
  }
  
  export default App;
  