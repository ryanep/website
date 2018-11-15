import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import HomeAbout from '@components/home-about';
import HomeExperience from '@components/home-experience';
import HomeWork from '@components/home-work';
import HomeTimeline from '@components/home-timeline';
import ContactForm from '@components/contact-form';
import { pageFetchRequest } from '@actions/page';
import { contactFormRequest } from '@actions/contact-form';
import * as styled from './styled';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactFormInputs: {
        name: '',
        subject: '',
        email: '',
        message: ''
      }
    };
  }

  componentWillMount() {
    this.props.getPageData('home');
  }

  handleInputChange = event => {
    const input = event.target;
    const { name } = input;

    this.setState(prevState => ({
      contactFormInputs: {
        ...prevState.contactFormInputs,
        [name]: input.value
      }
    }));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const formIsValid = form.checkValidity();

    if (formIsValid) {
      const { name, subject, email, message } = this.state.contactFormInputs;

      this.setState({
        contactFormInputs: {
          name: '',
          subject: '',
          email: '',
          message: ''
        }
      });

      this.props.contactFormRequest({ name, subject, email, message });
    }
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
      <styled.Home>
        <Helmet title="Home - Ryan Elliott-Potter" />
        <HomeAbout {...about} />
        <HomeExperience {...experience} />
        <HomeWork {...work} />
        <HomeTimeline {...timeline} />
        <ContactForm
          {...contactForm}
          isLoading={this.props.contactForm.isLoading}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleFormSubmit}
          inputs={this.state.contactFormInputs}
        />
      </styled.Home>
    );
  }
}

Home.propTypes = {
  page: PropTypes.object,
  contactForm: PropTypes.object.isRequired
};

Home.defaultProps = {
  page: null
};

const mapStateToProps = state => ({
  page: state.page.page,
  contactForm: state.contactForm
});

const mapDispatchToProps = dispatch => ({
  getPageData: slug => {
    dispatch(pageFetchRequest(slug));
  },
  contactFormRequest: payload => {
    dispatch(contactFormRequest(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
