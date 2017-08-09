import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import reset from './reset.scss';
import fonts from './fonts.scss';
import styles from './style.scss';
import Header from '@components/header';
import Footer from '@components/footer';
import Loader from '@components/loader';
import Home from '@containers/home';
import About from '@containers/about';
import Work from '@containers/work';
import Contact from '@containers/contact';
import Error from '@containers/error';

export class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header
          isBanner={location.pathname === '/'}
          heading={'Ryan Elliott-Potter'}
          description={'Web Developer'}
        />
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
