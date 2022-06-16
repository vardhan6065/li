import React from "react";
import classes from './GamesearchContainer.module.css'
import Venue from "./GamesearchCards";
import farcry from '../assets/farcry.jpg'
import tombrider from '../assets/tombrider.jpg'
import fifa from '../assets/fifa.jpg'
import yakuza from '../assets/yakuza.jpg'
import witcher from '../assets/witcher.jpg'
import nfsheat from '../assets/nfsheat.jpg'
import cod from '../assets/cod.jpg'

const VenueContainer = (props) =>{
    return (
        <div className={classes.outercontainer}>
            <div className={classes.title}>Popular Game Searches</div>
            <div className={classes.container}>
                <Venue className={classes.card} img={farcry} text="FarCry 6.0"/>
                <Venue className={classes.card} img={tombrider} text="Tomb Rider"/>
                <Venue className={classes.card} img={fifa} text="Fifa 22" />
                <Venue className={classes.card} img={yakuza} text="Yakuza" />
                <Venue className={classes.card} img={witcher} text="The witcher" />
                <Venue className={classes.card} img={nfsheat} text="NFS heat" />
                <Venue className={classes.card} img={cod} text="Call Of Duty" />
            </div>
        </div>
    )
}

export default VenueContainer;
