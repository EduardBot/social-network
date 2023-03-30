import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../../Components/redux/state";
import classes from "./style.module.css";

const CreateMessage = (props) => {
let newMessageElement = React.createRef();

let onMessageChange = () => {
  let text = newMessageElement.current.value;
  props.dispatchMessage(updateNewMessageTextActionCreator(text));
}

let addMessage = () => {
  props.dispatchMessage(addMessageActionCreator());
}

  return (
    <div className={classes.createMessageWrapper}>
      <div>
        <textarea
          ref={newMessageElement}
          className={classes.newMessage}
          placeholder="Введите текст поста"
          onChange={onMessageChange}
        ></textarea>
      </div>
      <div>
        <button className={classes.btn} onClick={addMessage}>
          Add message
        </button>
      </div>
    </div>
  );
};

export default CreateMessage;
