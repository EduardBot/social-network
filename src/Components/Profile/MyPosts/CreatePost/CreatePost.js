import React from "react";
import classes from "./style.module.css";

const CreatePost = (props) => {
let newPostElement = React.createRef();

let addPost = () => {
  props.addPost();
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
}

  return (
    <div className={classes.createPostWrapper}>
      <div>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          ref={newPostElement}
          className={classes.newPost}
          placeholder="Введите текст поста" />
      </div>
      <div>
        <button type="button" className={classes.btn} onClick={addPost}>
          Add post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
