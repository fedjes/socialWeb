import React from "react";
import s from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={s.navBar}>
            <div className={s.navBarItem}>
                <a href="/profile">Profile</a>
            </div>
            <div className={s.navBarItem}>
                <a href="/message">Message</a>
            </div>
            <div className={s.navBarItem}>
                <a href="/music">Music</a>
            </div>
            <div className={s.navBarItem}>
                <a href="/friends">Friends</a>
            </div>
            <div className={s.navBarItem}>
                <a href="/posts">Posts</a>
            </div>
            <div className={s.navBarItem}>
                <a href="/news">News</a>
            </div>
            <div className={s.navBarItem}>
                <a href="/settings">Settings</a>
            </div>
        </div>
    );
};

export default NavBar;