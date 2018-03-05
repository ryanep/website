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
        <Helmet title="Work - Ryan Elliott-Potter" />
        <TitleBar heading="Work" />
        Work
      </main>
    );
  }
}

Work.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  data: state.page
});

const mapDispatchToProps = dispatch => ({
  getPageData: slug => {
    dispatch(pageFetchRequest(slug));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Work);
