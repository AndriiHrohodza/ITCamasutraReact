import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li className="item-active">
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </li>
  )
}

export default DialogItem;