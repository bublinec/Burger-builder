import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import BurgerBuilder from './containers/BurgerBuilder';
import Toolbar from './components/Navigation/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer';
import Checkout from './containers/Checkout';
import { Route, Switch, Redirect} from 'react-router-dom'


const StyledMain = styled.main`
  margin-top: 100px;
`;

class App extends Component {
  state = {
    showSideDrawer: false
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
          <Route path='/builder' component={BurgerBuilder}/>
          <Route path='/checkout' component={Checkout}/> 
          <Redirect from='/' to='/builder' />   
        </StyledMain>
    </Fragment>
    )
  }
}
  
  export default App;
  