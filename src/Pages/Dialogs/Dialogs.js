import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import classes from "./style.module.css";

const Dialogs = (props) => {
let dialogsList = props.state.dialogsData.map ( dialog => <DialogsItem name={dialog.name} id={dialog.id} /> )
let messagesList = props.state.messagesData.map ( message => <MessagesItem message={message.message} /> )

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        { dialogsList }
      </div>
      <div className={classes.messages}>
        { messagesList }
      </div>
    </div>
  );
};

export default Dialogs;
