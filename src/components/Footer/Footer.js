import React from 'react';
import classes from './Footer.module.css';

import FooterItem from './FooterItem/FooterItem';
import FooterIcon from './FooterIcon/FooterIcon';

import location from '../../assets/images/location.png';
import phone from '../../assets/images/phone.png';
import email from '../../assets/images//email.png';
import facebook from '../../assets/images/facebook.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';


const FOOTER_ELEMENTS = [
    { img: location, text: (<p className={classes.children}>Nova Friburgo, <strong>Rio de Janeiro</strong>. Brasil</p>), keyVal:"el1" },
    { img: phone, text: (<p className={classes.children}><strong>(+55) 22 99860-6441</strong></p>), keyVal:"el2" },
    { img: email, text: <a className={classes.children}>christianltdias@gmail.com</a>, keyVal:"el3" },
]

const SOCIAL_MEDIA = [

    { img: facebook, ref: "https://www.facebook.com/christian.leitedias", keyVal:"me1" },
    { img: linkedin, ref: "https://www.linkedin.com/in/christian-leite-dias/", keyVal:"me2" },
    { img: github, ref: "http://github.com/christianltdias" , keyVal:"me3"},
]

const footer = (props) => {

    const contact = FOOTER_ELEMENTS.map((item) => {

    return <FooterItem key={item.keyVal} img={item.img}>{item.text}</FooterItem>
    })

    const media = SOCIAL_MEDIA.map((item) => {

        return <FooterIcon key={item.keyVal} img={item.img} linkRef={item.ref} />
    })

    return (
        <div className={classes.teste}>

            <section className={[classes.Menu, classes.Container, classes.Menu_template_columns].join(" ")}>
                <div className={classes.contactContainer}>
                    {contact}
                </div>

                <div>
                    <h2>About this site</h2>
                    <div className={classes.infoBox}>
                        <p>
                            This is a website developed by <strong>Christian Leite Dias</strong>. It allows
                            the user to search any location's weather and uses <strong>Mapbox</strong> geocoding
                            API to get the location's latitude and longitude, an then uses <strong>Weatherstack</strong>
                            API to get the weather.
                        </p>
                    </div>

                    <div className={classes.mediaContainer}>
                        {media}
                    </div>
                </div>


            </section>


        </div>
    )
}

export default footer;