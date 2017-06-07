import React, { Component } from 'react';
import WorkItem from './work-item';
import styles from './style.scss';

export default class HomeWork extends Component {

    render() {
        return (
            <section id={'work'} className={styles.work}>
                <div className={styles.wrap}>
                    <h2 className={styles.heading}>{this.props.content.title}</h2>
                    <p className={styles.desc}>{this.props.content.desc}</p>
                    <div className={styles.items}>
                        {this.props.content.work.map((item, index) => <WorkItem key={index}
                            image={item.image}
                            alt={item.imageAlt}
                            desc={item.desc}
                            url={item.url}
                            inProgress={item.inProgress} />)}
                    </div>
                    {/*<Link to={this.props.content.aboutButtonURL} className={styles.button}>
                        {this.props.content.aboutButtonText}
                    </Link>*/}
                </div>
            </section>
        );
    }

}