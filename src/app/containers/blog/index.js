import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPageRequest } from '../../actions/page';
import Helmet from 'react-helmet';
import TitleBar from '../../components/title-bar';
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
        getPageData: (slug) => { dispatch(fetchPageRequest(slug)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);