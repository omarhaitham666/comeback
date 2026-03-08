import { useState } from "react";

function Message() {
  let items = ["boston", "new york", "chicago", "los angelos"];
  const[selectedIndex,setSelectedIndex] = useState(0);
  return (
    <>
      <h1>lists </h1>
      <ul className='list-group'>
        {items.map((item,index) => (
          <li className={selectedIndex===index?"list-group-item active":"list-group-item"} key={item} onClick={()=>{setSelectedIndex(index);}}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Message;
