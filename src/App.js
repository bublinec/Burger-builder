// packages
import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch} from 'react-router-dom'
import { connect } from 'react-redux';
import styled from 'styled-components';
// components
import BurgerBuilder from './containers/BurgerBuilder';
import Toolbar from './components/Navigation/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer';
import Checkout from './containers/Checkout';
import Orders from './containers/Orders';
import ContactDetails from './containers/ContactDetails';
import Auth from './Auth/Auth';
import Logout from './Auth/Logout';
import * as actions from './store/actions/index';


const StyledMain = styled.main`
  margin-top: 100px;
`;

class App extends Component {
  state = {
    showSideDrawer: false
  };

  componentDidMount() {
    this.props.tryAutoLogin();
  }

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
    // Guarding routes
    let routes = (
      <Switch>
        <Route path='/builder' component={BurgerBuilder}/>
        <Route path='/auth' component={Auth}/> 
        <Redirect from='/' to='/builder' />   
      </Switch>

    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/builder' component={BurgerBuilder}/>
          <Route path='/checkout' exact component={Checkout}/> 
          <Route path='/contact-details' component={ContactDetails}/>
          <Route path='/orders' component={Orders}/> 
          <Route path='/logout' component={Logout}/> 
          <Redirect from='/' to='/builder' />   
      </Switch>
      )
    }

    return(
      <Fragment>
        {/* Navigation */}
        <Toolbar showSideDrawer={this.showSideDrawerHandler} isAuthenticated={this.props.isAuthenticated}/>
        <SideDrawer 
          show={this.state.showSideDrawer} 
          hideSideDrawer={this.hideSideDrawerHandler}
          isAuthenticated={this.props.isAuthenticated}/>
        {/* Content */}
        <StyledMain>
          {routes}
        </StyledMain>
    </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null
})

const mapDispatchToProps = dispatch => ({
  tryAutoLogin: () => dispatch(actions.tryAutoLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
  