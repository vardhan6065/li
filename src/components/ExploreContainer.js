import classes from './ExploreContainer.module.css';
import React from 'react';

const ExploreContainer = props =>{
    return (
        <div className={classes.outercontainer}>
            <div className={classes.innercontainer}>
                <div className={classes.first}>Explore</div>
                <div className={classes.second}>Games</div>
            </div>
        </div>
    )
}

export default ExploreContainer;