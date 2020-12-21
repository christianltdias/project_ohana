import React from 'react';
import classes from './FooterItem.module.css';

const footItem = (props) => {
    return (
        <div >
            <div className={classes.FootItem}>

                <img src={props.img} className={classes.icon} />

                {props.children}
            </div>
        </div>
    )
};

export default footItem;