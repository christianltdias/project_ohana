import React from 'react';
import classes from './MainContent.module.css';
import FeaturedContent from './FeaturedContent/FeaturedContent';
import NewsContent from './NewsContent/NewsContent';
import SideContent from './SideContent/SideContent';

const mainContent = (props) => {
    return (
        <div className={classes.MainContent}>
            <div className={classes.LeftContent}>
                <FeaturedContent />

                <hr className={classes.SectionDivider} />
                
                <NewsContent />
            </div>

            <div style={{width: '100%', height: '100%' }}>
                <SideContent />
            </div>

        </div >
    )
}

export default mainContent;