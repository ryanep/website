import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import TitleBar from '@components/title-bar';
import { pageFetchRequest } from '@actions/page';
import styles from './style.scss';

export class Blog extends Component {
  componentWillMount() {
    this.props.getPageData(this.props.route.path);
  }

  render() {
    return (
      <main className={styles.main}>
        <Helmet title={'Blog - Ryan Elliott-Potter'} />
        <TitleBar heading={'Blog'} />
        Blog
      </main>
    );
  }
}

Blog.propTypes = {
  route: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
