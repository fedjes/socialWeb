import React from "react";
import s from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className={s.navBar}>
            <div className={s.navBarItem}>
                <Link to="/profile">Profile</Link>
            </div>
            <div className={s.navBarItem}>
                <Link to="/messages">Messages</Link>
            </div>
            <div className={s.navBarItem}>
                <Link to="/music">Music</Link>
            </div>
            <div className={s.navBarItem}>
                <Link to="/friends">Friends</Link>
            </div>
            {/* <div className={s.navBarItem}>
                <a href="/posts">Posts</a>
            </div> */}
            <div className={s.navBarItem}>
                <Link to="/news">News</Link>
            </div>
            <div className={s.navBarItem}>
                <Link to="/settings">Settings</Link>
            </div>
        </div>
    );
};

export default NavBar;