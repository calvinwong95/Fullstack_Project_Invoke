import React from 'react';
import classes from './maindb.module.css';

function MainDashboard({countUsers, countAdmins}) {


    return (
        <div className={classes.container}>
            <div className={classes.textHolder}>
                <div className={classes.individualText}>
                <h3>Total Number of Registered Users: </h3> <h3>{countUsers}</h3>
                </div>
                <div className={classes.individualText}>
                <h3>Total Number of Admins: </h3>  <h3>{countAdmins}</h3>
                </div>
            </div>
        </div>
        
    )
}

export default MainDashboard;
