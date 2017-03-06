import React, { Component } from 'react';
import Helmet from 'react-helmet';
import TitleBar from '../../components/title-bar';
import styles from './style.scss';

export default class Contact extends Component {

    render() {
        return (
        	<main className={styles.main}>
        		<Helmet title={'Contact - Ryan Elliott-Potter'} />
        		<TitleBar heading={'Contact'} />
        		Contact
        	</main>
        )
    }
    
}