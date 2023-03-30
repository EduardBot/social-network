import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import classes from "./style.module.css";

const CreatePost = (props) => {
let newPostElement = React.createRef();

let adddPost = () => {
  props.dispatchPost(addPostActionCreator());
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.dispatchPost(updateNewPostTextActionCreator(text));
}

  return (
    <div className={classes.createPostWrapper}>
      <div>
        <textarea
          onChange={onPostChange}
          // value={props.newPostText}
          ref={newPostElement}
          className={classes.newPost}
          placeholder="Введите текст поста" />
      </div>
      <div>
        <button type="button" className={classes.btn} onClick={adddPost}>
          Add post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
