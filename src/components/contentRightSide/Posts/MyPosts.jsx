import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts}>
            MyPosts:
            <textarea></textarea>
            <button>add post</button>
           <Post message='test post' like='3'/>
           <Post message='other post' like='0'/>
           <Post message='more posts' like='7'/>
        </div>
    );
}

export default MyPosts;