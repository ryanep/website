import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.scss';

export default class ExperienceIcon extends Component {

    render() {

    	var style = {
    		backgroundColor: this.props.data.colour
    	}

        return (
            <li className={styles.icon} style={style} title={this.props.data.name}>
            	<div className={styles.hide}>{this.props.data.name}</div>
            </li>
        )
    }
    
}