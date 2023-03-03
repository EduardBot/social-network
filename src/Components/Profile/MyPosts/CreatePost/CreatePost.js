import React from "react";
import classes from "./style.module.css";

let newPostElement = React.createRef();

let addPost = () => {
  let text = newPostElement.current.value;
  alert(text);
}

const CreatePost = () => {
  return (
    <div className="createPostWrapper">
      <div>
        <textarea
          ref={newPostElement}
          className={classes.newPost}
          placeholder="Введите текст поста"
        ></textarea>
      </div>
      <div>
        <button
        className={classes.btn}
        onClick={addPost}
          >Add post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
