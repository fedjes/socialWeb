import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts post={props.state} />
    </div>
  );
};

export default Profile;