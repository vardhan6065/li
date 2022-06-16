import React, { Fragment } from "react";
import CardsImages from "./CardsImages";
import classes from './CardsContainer.module.css'
import gamepass from '../assets/gamepass.jpg'
import games from '../assets/games.jpg'
import console from '../assets/console.jpg'
import accessories from '../assets/accessories.jpg'
import deals from '../assets/deals.jpg'
import controls from '../assets/controls.jpg'
import store from '../assets/store.jpg'

const CardsContainer = (props) =>{
    return (
        <div className={classes.outercontainer}>
            <div className={classes.container}>
                <CardsImages className={classes.card} img={games} text="Games"/>
                <CardsImages className={classes.card}  img={console} text="Consoles" />
                <CardsImages className={classes.card}  img={accessories} text="Accessories" />
                <CardsImages className={classes.card}  img={deals} text="Deals" />
                <CardsImages className={classes.card} img={controls} text="Controls"/>
                <CardsImages className={classes.card} img={store} text="Store"/>
                <CardsImages className={classes.card} img={gamepass} text="Game Pass"/>
            </div>
        </div>
    )
}

export default CardsContainer;
