import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts post={props.state} addPost={props.addPost} changePost={props.changePost}/>
    </div>
  );
};

export default Profile;