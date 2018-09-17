import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Root from '@components/root';
import Header from '@components/header';
import Footer from '@components/footer';
import Loader from '@components/loader';
import Home from '@containers/home';
import Contact from '@containers/contact';
import Error from '@containers/error';
import Navigation from '@components/navigation';
import Bubbles from '@components/bubbles';

const theme = {
  breakpoints: {
    mobile: '32rem',
    tablet: '76.8rem',
    desktop: '102.4rem'
  },
  colours: {
    primary: '#a25656'
  }
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavigationOpen: false
    };
  }

  handleBurgerClick = () => {
    this.setState({ isNavigationOpen: true });
  };

  handleNavigationLinkClick = () => {
    this.setState({ isNavigationOpen: false });
  };

  render() {
    const navLinks = [
      { to: '/', title: 'Home' },
      { to: '/contact', title: 'Contact' }
    ];

    return (
      <ThemeProvider theme={theme}>
        <Root>
          <Header
            isBanner={this.props.location.pathname === '/'}
            heading="Ryan Elliott-Potter"
            description="Web Developer"
          >
            <Navigation
              links={navLinks}
              isOpen={this.state.isNavigationOpen}
              onBurgerClick={this.handleBurgerClick}
              onNavigationLinkClick={this.handleNavigationLinkClick}
            />
            <Bubbles bubbles={20} />
          </Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Error} status={404} />
          </Switch>
          <Footer />
          {/* {this.props.isLoading && <Loader />} */}
        </Root>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isLoading: PropTypes.bool
};

App.defaultProps = {
  isLoading: false
};

const mapStateToProps = state => ({
  isLoading: state.page.isLoading
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
