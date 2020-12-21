import React from 'react';
import classes from './NewsContent.module.css';
import Item from './NewsContentItem/NewsContentItem';
import { getRandomGame } from '../../../development';

const NewsContent = (props) => {
    return (
        <div className={classes.NewsContentContainer}>

            <p className={classes.HeaderText}>Últimas notícias</p>
            <hr className={classes.HorizontalDivider} />


            <div className={classes.ContentListContainer}>
                <Item item={getRandomGame()}/>
                <Item item={getRandomGame()}/>
                <Item item={getRandomGame()}/>
                <Item item={getRandomGame()}/>
                <Item item={getRandomGame()}/>
                <Item item={getRandomGame()}/>
                <Item item={getRandomGame()}/>
                <Item item={getRandomGame()}/>
                <Item item={getRandomGame()}/>
            </div>

            <button className={classes.MoreButton}>Ver mais notícias</button>

        </div>
    )
};

export default NewsContent;