import React from 'react';
import classes from './AnalysisItem.module.css';
import test from '../../../../assets/images/game.jpg'

const AnalysisItem = (props) => {
    const border = props.last ? null : <hr className={classes.HorizontalDivider} />;
    return (
        <div>
            <div className={classes.ItemContainer}>
                <img src={props.item.img} alt="image" className={classes.imageItem} />
                <p className={classes.TitleName}>{props.item.title}<br /> <span className={classes.AnalysisDate}>06/12/2020</span></p>

                <p className={classes.TitleScore}>{props.item.score}</p>
            </div>
            {border}
        </div >

    )
}

export default AnalysisItem;