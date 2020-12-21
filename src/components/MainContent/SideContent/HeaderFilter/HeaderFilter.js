import React, { useState } from 'react';
import classes from './HeaderFilter.module.css';

const HeaderFilter = (props) => {
    const [filterFlags, setfilterFlags] = useState([true, false, false])

    const setFlagValue = (index) => {
        const newArray = [false, false, false];
        newArray[index] = true;
        setfilterFlags(newArray);
    }
    return (
        <div>
            <div className={classes.TimeFilter}>
                <a className={filterFlags[0] ? classes.timeTextActive : classes.timeText}
                    onClick={() => setFlagValue(0)}>
                    Análises
                        </a>
                <p>/</p>
                <a className={filterFlags[1] ? classes.timeTextActive : classes.timeText}
                    onClick={() => setFlagValue(1)}>
                    Lançamentos
                    </a>
                <p>/</p>
                <a className={filterFlags[2] ? classes.timeTextActive : classes.timeText}
                    onClick={() => setFlagValue(2)}>
                    Vídeos
                    </a>
            </div>
        </div>
    )
}

export default HeaderFilter;