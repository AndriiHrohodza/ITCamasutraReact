import {BrowserRouter} from "react-router-dom";
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";

const DialogsData = [
  {id: 1, name: "Andrew"},
  {id: 2, name: "Vova"},
  {id: 3, name: "Ira"},
  {id: 4, name: "Ola"},
  {id: 5, name: "Vika"}
]

const MessageData = [
  {id: 1, text: "Text1"},
  {id: 2, text: "TExt2"},
  {id: 3, text: "Text3"},
  {id: 4, text: "Text4"},
  {id: 5, text: "Text5"}
]

const DialogItems =  DialogsData.map((dialog) => {
  return <DialogItem id={dialog.id} key={dialog.id} name={dialog.name}/>
})

const MessageItems = MessageData.map((messageItem) => {
  return <Message key={messageItem.id} text={messageItem.text}/>
})

const Dialogs = (props) => {
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