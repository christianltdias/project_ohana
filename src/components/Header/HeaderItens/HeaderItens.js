import React, { useEffect, useState } from 'react';
import classes from './HeaderItens.module.css';

const HeaderItens = (props) => {


    return (
        <div className={classes.MenuContainer}>

            <div id="left-itens-div">
                <a href="/"
                    className={classes.MenuItem}>
                    Plataforma
                </a>
            </div>

            <div id="right-itens-div">
                <a href="/"
                    className={[classes.MenuItem, classes.active].join(" ")}>
                    Notícias
                </a>
                <a href="/"
                    className={classes.MenuItem}>
                    Vídeos
                </a>
                <a href="/"
                    className={classes.MenuItem}>
                    Análises
                </a>
                <a href="/"
                    className={classes.MenuItem}>
                    Artigos
                </a>
            </div>

        </div>
    )
}

export default HeaderItens;