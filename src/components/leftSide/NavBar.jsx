import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className={s.navBar}>
            <div className={s.navBarItem}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink >
            </div>
            <div className={s.navBarItem}>
                <NavLink to="/messages" activeClassName={s.activeLink}>Messages</NavLink >
            </div>
            <div className={s.navBarItem}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink >
            </div>
            <div className={s.navBarItem}>
                <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink >
            </div>
            {/* <div className={s.navBarItem}>
                <a href="/posts">Posts</a>
            </div> */}
            <div className={s.navBarItem}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.navBarItem}>
             <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </div>
    );
};

export default NavBar;