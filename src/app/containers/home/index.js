import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styles from './style.scss';

export default class Home extends Component {

    render() {
        return (
        	<main className={styles.home}>
        		<Helmet title={'Home - Ryan Elliott-Potter'} />
        		Home
        	</main>
        )
    }
    
}