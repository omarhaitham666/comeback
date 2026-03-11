import './App.css'
import Message from './Message'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let items = ["boston", "new york", "chicago", "los angelos"];
  return (
    <>
      <Message  items={items} heading='cities' onSelectItem={(item) => console.log(item)} />
    </>
  )
}

export default App
