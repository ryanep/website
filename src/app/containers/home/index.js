import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeAbout from '@components/home-about';
import HomeExperience from '@components/home-experience';
import HomeWork from '@components/home-work';
import HomeTimeline from '@components/home-timeline';
import ContactForm from '@components/contact-form';
import { fetchPageRequest } from '@actions/page';
import styles from './style.scss';

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPageData('home');
  }

  handleInputChange = event => {
    console.log(event.target.value);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('form submitted');
  };

  render() {
    if (!this.props.page || !this.props.page.home) return null;
    const {
      about,
      experience,
      work,
      timeline,
      contactForm
    } = this.props.page.home.components;

    return (
      <main className={styles.main}>
        <Helmet title={'Home - Ryan Elliott-Potter'} />
        <HomeAbout {...about} />
        <HomeExperience {...experience} />
        <HomeWork content={work} />
        <HomeTimeline {...timeline} />
        <ContactForm
          {...contactForm}
          isLoading={true}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleFormSubmit}
        />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.page.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPageData: slug => {
      dispatch(fetchPageRequest(slug));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
