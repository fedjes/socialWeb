import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
    return (
      <div className={s.profile}>
        <div>
            <img src="#" alt="imgProfile" />
        </div>
        <div className={s.postDiscription}>
            postDiscription
        </div>
        <div className={s.posts}>
            <div>
                post1
            </div>
            <div>
                post2
            </div>
        </div>
      </div>  
    );
};

export default Profile;