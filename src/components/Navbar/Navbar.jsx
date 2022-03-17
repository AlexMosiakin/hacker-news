import React from "react";
import classes from './Navbar.module.css'
import reload from '../../img/reload.svg'
import back from '../../img/back.svg'
import { Link } from "react-router-dom";
function Navbar() {
    return(
        <div className={classes.navbarWrapper}>
            <h1 className={classes.navbarHeader}>HackerNews</h1>
            <div className={classes.navbarBtnWrapper}>
                <button className={classes.navbarBtn}>
                    <img src={reload} alt={reload} />
                </button>
                <Link to={"/news"} className={classes.navbarBtn}>
                    <img src={back} alt={back} />
                </Link>
            </div>

        </div>
    );  
}

export default Navbar