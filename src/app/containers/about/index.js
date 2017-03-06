import React, { Component } from 'react';
import Helmet from 'react-helmet';
import TitleBar from '../../components/title-bar';
import styles from './style.scss';

export default class About extends Component {

    render() {
        return (
        	<main className={styles.main}>
        		<Helmet title={'About - Ryan Elliott-Potter'} />
        		<TitleBar heading={'About'} />
        		About
        	</main>
        )
    }
    
}