import {BrowserRouter} from "react-router-dom";
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const DialogsData = props.dataDialogs.DialogsData;
  const MessageData = props.dataDialogs.MessageData;
  const DialogItems =  DialogsData.map((dialog) => {
    return <DialogItem id={dialog.id} key={dialog.id} name={dialog.name}/>
  })
  const MessageItems = MessageData.map((messageItem) => {
    return <Message key={messageItem.id} text={messageItem.text}/>
  })
  
  return (
    <BrowserRouter>
      <div>
        <div className="dialogs">
          <div className="dialog-items">
            <ul>
              {DialogItems}
            </ul>
          </div>
          <div className="messages">
            <ul>
              {MessageItems}
            </ul>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Dialogs;