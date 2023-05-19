import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./Posts/MyPosts";

const Profile = () => {
    return (
      <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjlDxDxnH_0vHSWOhzuWXDZvDICYVI5PcgGg&usqp=CAU" alt="imgProfile" />
        <div className={s.postDiscription}>
            postDiscription
        </div>
        <MyPosts />
      </div>  
    );
};

export default Profile;