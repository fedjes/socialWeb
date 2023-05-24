import React from "react";
import s from './Profile.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjlDxDxnH_0vHSWOhzuWXDZvDICYVI5PcgGg&usqp=CAU" alt="imgProfile" />
            <div className={s.postDiscription}>
                postDiscription
            </div>
        </div>
    );
};

export default ProfileInfo;