import React from "react";
import classes from "./style.module.css";

const CreateMessage = () => {
let newMessageElement = React.createRef();
let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
}

  return (
    <div className={classes.createMessageWrapper}>
      <div>
        <textarea
          ref={newMessageElement}
          className={classes.newMessage}
          placeholder="Введите текст поста"
        ></textarea>
      </div>
      <div>
        <button className={classes.btn} onClick={addMessage}>
          Add post
        </button>
      </div>
    </div>
  );
};

export default CreateMessage;
