import React from "react";
import classes from './Content.module.css'
// import { FaBeer } from 'react-icons/fa';

// className={classes.}

const Content = (props) =>{
    return (
        <div className={classes.outercontainer}>
            <div className={classes.innercontainer}>
                <div className={classes.upper}>
                    <h3>Stringar - The GameZone You Need</h3>
                    <h4>Play Games With Virtual Reality</h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                </div>
               <hr></hr>
                {/* <div className={classes.lower}>
                    <h4 className={classes.contact}>Contact Us</h4>
                    <div className={classes.stickers}>
                        <p><FaBeer /></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Content;