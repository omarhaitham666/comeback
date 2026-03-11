import { useState } from "react";
interface MessageProps{
  items:string[];
  heading:string;
  onSelectItem:(item:string) => void;
}
function Message({items,heading,onSelectItem}:MessageProps) {
  const[selectedIndex,setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>
      <ul className='list-group'>
        {items.map((item,index) => (
          <li className={selectedIndex===index?"list-group-item active":"list-group-item"} key={item} onClick={()=>{setSelectedIndex(index);onSelectItem(item);}}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Message;
