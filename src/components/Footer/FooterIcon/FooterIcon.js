import React from 'react';
import classes from './FooterIcon.module.css';

const footerIcon = (props) => {
    return (
        <div className={classes.container}>
            <a href={props.linkRef} target="_blank">
                <div className={classes.imgContainer}>
                    <img src={props.img} className={classes.icon} />
                    <div className={classes.iconOverlay} />
                </div>
            </a>
        </div>
    )
};

export default footerIcon;