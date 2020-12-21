import React, { useRef, useState } from 'react';
import classes from './NewsContentItem.module.css';
import test from '../../../../assets/images/game.jpg';
import Aux from '../../../../hoc/Auxiliary';

const NewsContentItem = (props) => {

    const item = useRef();
    const [timeOver, setTimeOver] = useState(0);
    const [initialTime, setInitialTime] = useState(0);
    const [show, setShow] = useState(false);
    let teste = false;

    const trimText = (str, bigText) => {
        if (bigText) {
            return str.slice(0, 83) + "...";
        } else {
            return str.slice(0, 70) + "...";
        }
    }


    const testStr = "Aqui vai o texto informativo sobre a noticia em destaque, meu querido! " +
        "Esse é um teste também para o comprimeto do texto. É bem importante que o texto seja reduzido" +
        "de forma correta por aqui."

    return (
        <Aux>
            <div className={classes.Item}>
                    <img src={props.item.img} alt="image" className={classes.imageItem} />
                    <p className={classes.Text}>{trimText(props.item.text, true)}</p>
            </div>
        </Aux>

    )
}

export default NewsContentItem;