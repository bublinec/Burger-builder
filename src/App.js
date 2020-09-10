import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin-top: 100px;
`;

function App() {
  return (
    <div>

      {/* Navigation */}
      <div>
        Toolbar, Sidebar, Backdrop
      </div>
      
      {/* Content */}
      <StyledMain>
        <BurgerBuilder />
      </StyledMain>
    
    </div>
    );
  }
  
  export default App;
  