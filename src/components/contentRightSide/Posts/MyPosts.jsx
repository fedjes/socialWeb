import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newArrPData = props.post.map(post => <Post message={post.pMessage} like={post.lokes} />)

    return (
        <div className={s.posts}>
            <h4>MyPosts:</h4>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
            <div className="postsBlock">
                {newArrPData}
            </div>
        </div>
    );
}

export default MyPosts;