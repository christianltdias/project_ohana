import React, { useState } from 'react';
import classes from './FeaturedContent.module.css';
import Item from './FeaturedContentItem/FeaturedContentItem';
import { getRandomGame } from '../../../development';

const NewsContent = (props) => {

    const [filterFlags, setfilterFlags] = useState([true, false, false])

    const setFlagValue = (index) => {
        const newArray = [false, false, false];
        newArray[index] = true;
        setfilterFlags(newArray);
    }

    return (
        <div className={classes.MainContent}>
            <div className={classes.TimeFilter}>
                <a className={filterFlags[0] ? classes.timeTextActive : classes.timeText}
                    onClick={() => setFlagValue(0)}>
                    HOJE
                        </a>
                <a className={filterFlags[1] ? classes.timeTextActive : classes.timeText}
                    onClick={() => setFlagValue(1)}>
                    ESTA SEMANA
                    </a>
                <a className={filterFlags[2] ? classes.timeTextActive : classes.timeText}
                    onClick={() => setFlagValue(2)}>
                    ESTE MÊS
                    </a>
            </div>
            <p className={classes.HeaderText}>Em destaque</p>
            <hr className={classes.HorizontalDivider} />

            <div className={classes.ContentListContainer}>
                <Item item={getRandomGame()}/>
                <Item item={getRandomGame()}/>
                <Item item={getRandomGame()}/>
                <Item item={getRandomGame()}/>
                <Item item={getRandomGame()}/>
                <Item item={getRandomGame()}/>
            </div>


        </div >
    )
}

export default NewsContent;