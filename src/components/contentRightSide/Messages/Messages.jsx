import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Messages.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.Dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={s.Message}>{props.message}</div>
    );
};

const Dialogs = (props) => {

    let dData = [
        { id: 1, name: 'felis' },
        { id: 2, name: 'martin' },
        { id: 3, name: 'mom' },
        { id: 4, name: 'bro' },
    ]
    let mData = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'ky' },
        { id: 3, message: 'what' },
    ]


    let newArrDData = dData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let newArrMData = mData.map(message => <Message message={message.message} />)

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogItem}>
                {newArrDData}
            </div>
            <div className={s.Messages}>
                {newArrMData}
            </div>
        </div>
    );
}

export default Dialogs;