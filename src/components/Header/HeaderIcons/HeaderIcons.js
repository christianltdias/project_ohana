import react from 'react';
import classes from './HeaderIcons.module.css';
import twitch from '../../../assets/images/twitch.png';
import facebook from '../../../assets/images/facebook.png';
import instagram from '../../../assets/images/instagram.png';
import youtube from '../../../assets/images/youtube.png';


const headerIcons = (props) => {

    const figures = [{ id: "twitch-icon", icon: twitch, alt: "twitch icon" },
    { id: "facebook-icon", icon: facebook, alt: "facebook icon" },
    { id: "youtube-icon", icon: youtube, alt: "youtube icon" },
    { id: "instagram-icon", icon: instagram, alt: "instagram icon" }];

    const itens = figures.map(el =>
        <div className={classes.iconsContainer} key={el.id}>
            <img src={el.icon} alt={el.alt} className={classes.mediaIcons} />
            <div className={classes.hoverEffect}></div>
        </div>)

    return (
        <div>
            {itens}
        </div>
    )
}

export default headerIcons;