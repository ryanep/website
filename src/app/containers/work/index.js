import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import TitleBar from '@components/title-bar';
import { pageFetchRequest } from '@actions/page';
import styles from './style.scss';

export class Work extends Component {
  componentWillMount() {
    this.props.getPageData(this.props.location.pathname);
  }

  render() {
    return (
      <main className={styles.main}>
        <Helmet title={'Work - Ryan Elliott-Potter'} />
        <TitleBar heading={'Work'} />
        Work
      </main>
    );
  }
}

Work.propTypes = {
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    data: state.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPageData: slug => {
      dispatch(pageFetchRequest(slug));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Work);
