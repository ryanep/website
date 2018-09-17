import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import './fonts.scss';

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
      { to: '/about', title: 'About' },
      { to: '/work', title: 'Work' },
      // { to: '/blog', title: 'Blog' },
      { to: '/contact', title: 'Contact' }
    ];

    return (
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
        {this.props.isLoading && <Loader />}
      </Root>
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
