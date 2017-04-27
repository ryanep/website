import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPageRequest } from '../../actions/page';
import Helmet from 'react-helmet';
import TitleBar from '../../components/title-bar';
import ContactForm from '../../components/contact-form';
import ContactConnect from '../../components/contact-connect';
import styles from './style.scss';

export class Contact extends Component {

	componentWillMount() {
        this.props.getPageData('contact');
    }

    render() {
        if (Object.keys(this.props.data).length == 0) return null; // @TODO: Fix
        return (
        	<main className={styles.main}>
        		<Helmet title={'Contact - Ryan Elliott-Potter'} />
        		<TitleBar heading={'Contact'} />
                <ContactConnect />
        		<ContactForm content={this.props.data.components.contactForm} />
        	</main>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        data: state.page.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPageData: (slug) => { dispatch(fetchPageRequest(slug)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);