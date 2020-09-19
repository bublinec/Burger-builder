import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Route, Redirect, Switch} from 'react-router-dom'

import BurgerBuilder from './containers/BurgerBuilder';
import Toolbar from './components/Navigation/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer';
import Checkout from './containers/Checkout';
import Orders from './containers/Orders';
import ContactDetails from './containers/ContactDetails';



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
          <Switch>
            <Route path='/builder' component={BurgerBuilder}/>
            <Route path='/checkout' exact component={Checkout}/> 
            <Route path={'/contact-details'} component={ContactDetails}/>
            <Route path='/orders' component={Orders}/> 
            <Redirect from='/' to='/builder' />   
          </Switch>
        </StyledMain>
    </Fragment>
    )
  }
}
  
  export default App;
  