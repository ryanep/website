import React, { Component } from 'react';
import { connect } from 'react-redux';
import reset from './reset.scss';
import styles from './style.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Loader from '../../components/loader';

export class App extends Component {

    render() {
        return (
            <div>
            	<Header path={this.props.location.pathname} />
				{this.props.children}
        		<Footer />
                <Loader />
        	</div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);