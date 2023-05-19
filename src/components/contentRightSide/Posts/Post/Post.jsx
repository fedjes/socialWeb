import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOi6B1EjD4lkdZg4ClLhWTxjsfVQVRsdW1aw&usqp=CAU" alt="avaPost" />
            { props.message }
            <div>
                <span>
                    like
                    {props.like}
                </span>
            </div>
        </div>
    );
};

export default Post;