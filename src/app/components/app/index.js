import React, { Component } from 'react';
import styles from './style.scss';

export default class App extends Component {

    render() {
        return (
        	{this.props.children}
        )
    }
    
}