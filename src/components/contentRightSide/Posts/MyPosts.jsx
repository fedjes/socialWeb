import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let pData = [
        { id: 1, pMessage: 'test post', lokes: 3 },
        { id: 1, pMessage: 'other post', lokes: 1 },
        { id: 1, pMessage: 'more posts', lokes: 7 },
    ]

    let newArrPData = pData.map(post => <Post message={post.pMessage} like={post.lokes} />)

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