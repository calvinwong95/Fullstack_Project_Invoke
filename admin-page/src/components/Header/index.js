import React from 'react';
import classes from './header.module.css';

export default function Header({onClick,text,title}) {

    return (
        <div className={classes.container}>
            <div>
                <h1 className={classes.logo}>{title}</h1>
            </div>
            <div>
                <button className={classes.button} onClick={onClick}>{text}</button>
            </div>
        </div>
    )
}
