import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styles from './style.scss';

export default class About extends Component {

    render() {
        return (
        	<main className={styles.about}>
        		<Helmet title={'About - Ryan Elliott-Potter'} />
        		About
        	</main>
        )
    }
    
}