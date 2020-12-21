import React from 'react';
import classes from './ExpandedFeaturedItem.module.css';
import Aux from '../../../../hoc/Auxiliary';

const ExpandedFeaturedItem = (props) => {

    return (
        <div className={props.show ? null : classes.Hidden}>
            <div className={classes.ItemModal}>
                {props.children}
            </div>
            <div className={classes.Backdrop}>

            </div>
        </div>

    )
}

export default ExpandedFeaturedItem;