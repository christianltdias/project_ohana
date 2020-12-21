import React, { useRef, useEffect, useState } from 'react';
import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import HeaderItens from './HeaderItens/HeaderItens';
import HeaderIcons from './HeaderIcons/HeaderIcons';

function Header(props) {

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', () => {

            if (window.pageYOffset >= document.getElementById('banner-content').clientHeight) {
                setSticky(true);
            } else if (window.pageYOffset <= document.getElementById('banner-content').clientHeight) {
                setSticky(false);
            }

        })
    }, [])


    return (
        <div >

            <div className={[classes.HeaderDiv, isSticky ? null : null].join(" ")} id="banner-content">

                <div className={classes.HeaderIcons}>
                    <HeaderIcons />
                </div>

                <div className={classes.HeaderLogo}>
                    <Logo />
                </div>



            </div>

            <div className={[classes.HeaderItens,isSticky ? classes.sticky : null].join(" ")}>
                <HeaderItens/>
            </div>

        </div >
    )

}

export default Header;