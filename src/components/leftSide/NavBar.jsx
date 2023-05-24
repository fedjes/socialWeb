import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className={s.navBar}>
            <div className={s.navBarItem} >
                <NavLink to="/profile" className={s.active}>Profile</NavLink >
            </div>
            <div className={s.navBarItem}>
                <NavLink to="/messages" className={s.active}>Messages</NavLink >
            </div>
            <div className={s.navBarItem}>
                <NavLink to="/music" className={s.active}>Music</NavLink >
            </div>
            <div className={s.navBarItem}>
                <NavLink to="/friends" className={s.active}>Friends</NavLink >
            </div>
            {/* <div className={s.navBarItem}>
                <a href="/posts">Posts</a>
            </div> */}
            <div className={s.navBarItem}>
                <NavLink to="/news" className={s.active}>News</NavLink>
            </div>
            <div className={s.navBarItem}>
             <NavLink to="/settings" className={s.active}>Settings</NavLink>
            </div>
        </div>
       
    );
};

export default NavBar;