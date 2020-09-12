import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Toolbar from './components/Navigation/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer';

const StyledMain = styled.main`
  margin-top: 100px;
`;

class App extends Component {
  state = {
    showSideDrawer: true
  };

  showSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: true
    });
  };

  hideSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  render () {
    return(
      <Fragment>
      {/* Navigation */}
      <Toolbar showSideDrawer={this.showSideDrawerHandler}/>
      <SideDrawer show={this.state.showSideDrawer} hideSideDrawer={this.hideSideDrawerHandler}/>

      {/* Content */}
      <StyledMain>
        <BurgerBuilder />
      </StyledMain>
    </Fragment>
    )
  }
}
  
  export default App;
  