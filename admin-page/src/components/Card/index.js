import React from 'react';
import classes from './card.module.css';

function Card({text, value, onClick, type}) {
    return (
        <div className={classes.container} style={styles[type]}>
            <div className={classes.textHolder}>
                <h3 >{text}{value}</h3>
            </div>
            <div>
                <button className={classes.button} onClick={onClick}>View More</button>
            </div>
        </div>
        
    )
}

export default Card

const styles = ({
    primary: {
        boxShadow: "0px 0px 35px magenta ", 
        
    },
    
    secondary: {
        boxShadow: "0px 0px 35px red",
    }
    })