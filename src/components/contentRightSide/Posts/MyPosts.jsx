import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPost } from "../../redux/state";

const MyPosts = (props) => {
    let newArrPData = props.post.pData.map(post => <Post message={post.pMessage} like={post.lokes} />)
    let newPostFragment = React.createRef();

    let addNewPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostFragment.current.value;
        props.changePost(text);
    };

    return (
        <div className={s.posts}>
            <h4>MyPosts:</h4>
            <div>
                <textarea ref={newPostFragment} onChange={onPostChange} value={props.post.newPostText}/>
            </div>
            <div>
                <button onClick={addNewPost}>add post</button>
            </div>
            <div className="postsBlock">
                {newArrPData}
            </div>
        </div>
    );
}

export default MyPosts;