import './App.css'
import Message from './Message'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let items = ["boston", "new york", "chicago", "los angelos"];
  const handleOnSelection = (item:string)=>{
    console.log(item);
  }
  return (
    <>
      <Message  items={items} heading='cities' onSelectItem={handleOnSelection} />
    </>
  )
}

export default App
