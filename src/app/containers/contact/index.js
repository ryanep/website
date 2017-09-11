import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import TitleBar from '@components/title-bar';
import ContactForm from '@components/contact-form';
import ContactConnect from '@components/contact-connect';
import { pageFetchRequest } from '@actions/page';
import { contactFormRequest } from '@actions/contact-form';
import styles from './style.scss';

export class Contact extends Component {
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
    this.props.getPageData(this.props.location.pathname);
  }

  handleInputChange = event => {
    const input = event.target;
    const name = input.name;

    this.setState({
      contactFormInputs: {
        ...this.state.contactFormInputs,
        [name]: input.value
      }
    });
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

      this.props.contactFormRequest(name, subject, email, message);
    }
  };

  render() {
    if (!this.props.page || !this.props.page.contact) return null;

    const { contactForm } = this.props.page.contact.components;

    return (
      <main className={styles.main}>
        <Helmet title={'Contact - Ryan Elliott-Potter'} />
        <TitleBar heading={'Contact'} />
        <ContactConnect />
        <ContactForm
          {...contactForm}
          isLoading={this.props.contactForm.isLoading}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleFormSubmit}
          inputs={this.state.contactFormInputs}
        />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.page.page,
    contactForm: state.contactForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPageData: slug => {
      dispatch(pageFetchRequest(slug));
    },
    contactFormRequest: (name, subject, email, message) => {
      dispatch(contactFormRequest(name, subject, email, message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
