import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import TitleBar from '../../components/title-bar';
import styles from './style.scss';

import { fetchPageData } from '../../actions/page';

export class About extends Component {

	componentWillMount() {
        this.props.fetchData('about');
    }

    render() {
        console.log("Rendering about");
        return (
        	<main className={styles.main}>
        		<Helmet title={'About - Ryan Elliott-Potter'} />
        		<TitleBar heading={'About'} />
        		About
        	</main>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        data: state.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (slug) => { dispatch(fetchPageData(slug)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);