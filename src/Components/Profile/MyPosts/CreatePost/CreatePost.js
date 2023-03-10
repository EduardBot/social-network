import React from "react";
import classes from "./style.module.css";

const CreatePost = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={classes.createPostWrapper}>
      <div>
        <textarea
          ref={newPostElement}
          className={classes.newPost}
          placeholder="Введите текст поста"
        ></textarea>
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
