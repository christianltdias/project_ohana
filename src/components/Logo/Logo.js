import react from 'react';
import classes from './Logo.module.css';
import main_logo from '../../assets/images/ohana_trans.png';
import Auxi from '../../hoc/Auxiliary';

const logo = () => {
    return (
        <div>
            <img src={main_logo} alt="Ohana project main logo" className={classes.LogoImg} />
        </div>
    )
}

export default logo;