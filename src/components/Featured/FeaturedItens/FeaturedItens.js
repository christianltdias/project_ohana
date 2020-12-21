import React, { useRef, useState } from 'react';
import classes from './FeaturedItens.module.css';
import test from '../../../assets/images/game.jpg';
import ExpandedItem from './ExpandedFeaturedItem/ExpandedFeaturedItem';
import Aux from '../../../hoc/Auxiliary';

const FeaturedItens = (props) => {
    // className={props.bigItem? classes.BigItem : classes.SmallItem}

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
            <ExpandedItem show={show}>Aqui vai um teste</ExpandedItem>
            <div className={[props.bigItem ? classes.BigItem : classes.SmallItem, props.gridPosition].join(" ")}>
                <div className={props.bigItem ? classes.gridBigItem : classes.gridSmallItem}>
                    <div className={classes.frontCover}>

                    </div>

                    <img src={props.item.img} alt="image" className={props.bigItem ? classes.imageBigItem : classes.imageSmallItem} />
                    <p>{trimText(props.item.text, props.bigItem)}</p>
                </div>
            </div>
        </Aux>

    )
}

export default FeaturedItens;