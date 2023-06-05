import React from "react";
import s from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
debugger;
    let newArrDData = props.state.dData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let newArrMData = props.state.mData.map(message => <Message message={message.message} />)

    let newMessageFragment = React.createRef();
    let addNewMessage = () => {
        let newMessage = newMessageFragment.current.value;
        alert (newMessage);
    };
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogItem}>
                {newArrDData}
            </div>
            <div className={s.Messages}>
                {newArrMData}
                <div>
                <textarea ref={newMessageFragment}></textarea>
                <button onClick={addNewMessage}>send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;