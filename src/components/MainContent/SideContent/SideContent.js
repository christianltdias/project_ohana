import React, { useState, useEffect } from 'react';
import classes from './SideContent.module.css';
import HeaderFilter from './HeaderFilter/HeaderFilter';
import AnalysisItem from './AnalysisItens/AnalysisItem';
import { getRandomGame } from '../../../development';

const SideContent = (props) => {

    // [listItens, setListItens] = useState();
    // [displayType, setDisplayType] = useState('test');

    // const getListItens = () => {
    //     const newItens = [];
    //     switch (displayType) {
    //         case 'test':
    //             newItens.push({ title: 'Cyberpunk 2077', img: test, score: 94 })
    //             break;
    //         case 'test':
    //             break;
    //         case 'test':
    //             break;
    //         case 'test':
    //             break;
    //         default:
    //             newItens = [];
    //     }
    // }

    return (
        <div className={classes.Container}>

            <HeaderFilter />

            <div>
                <AnalysisItem item={getRandomGame()} />
                <AnalysisItem item={getRandomGame()} />
                <AnalysisItem item={getRandomGame()} />
                <AnalysisItem item={getRandomGame()} />
                <AnalysisItem item={getRandomGame()} />
                <AnalysisItem item={getRandomGame()} />
                <AnalysisItem item={getRandomGame()} />
                <AnalysisItem item={getRandomGame()} />
                <AnalysisItem last item={getRandomGame()} />
            </div>

            <button className={classes.MoreButton}>Ver mais análises</button>

        </div>
    )
}

export default SideContent;
