import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import reset from './reset.scss'; // eslint-disable-line no-unused-vars
import fonts from './fonts.scss'; // eslint-disable-line no-unused-vars
import styles from './style.scss';
import Header from '@components/header';
import Footer from '@components/footer';
import Loader from '@components/loader';
import Home from '@containers/home';
import About from '@containers/about';
import Work from '@containers/work';
import Contact from '@containers/contact';
import Error from '@containers/error';
import Navigation from '@components/navigation';
import Bubbles from '@components/bubbles';

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
      <div className={styles.app}>
        <Header
          isBanner={this.props.location.pathname === '/'}
          heading={'Ryan Elliott-Potter'}
          description={'Web Developer'}
        >
          <Navigation
            links={navLinks}
            isOpen={this.state.isNavigationOpen}
            handleBurgerClick={this.handleBurgerClick}
            handleNavigationLinkClick={this.handleNavigationLinkClick}
          />
          <Bubbles bubbles={20} />
        </Header>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/work'} component={Work} />
          <Route exact path={'/contact'} component={Contact} />
          <Route component={Error} />
        </Switch>
        <Footer />
        {this.props.isLoading && <Loader />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.page.isLoading
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
