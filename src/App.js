import "./index.css"
import { Fragment } from 'react';
import Button from "./Button";
import Tab from "./Tab";
import {useState,} from 'react';



function App() {
  const todos = ["todo1", "todo2", "todo3"]
  const searchFunction = () => {
    alert('hello')
  }

  const [activeTab,setActiveTab]= useState(1)



  return (
    <>
      <h1 style={{ color: 'red', backgroundColor: 'black' }}>Apotech.com</h1>
      <label htmlFor="search" tabIndex={2} onClick={searchFunction}>arama</label>
      <input type="text" id="search" tabIndex={1} />
      <ul>
        {todos.map(function (todo, index) {
          return <li key={index}>{todo}</li>
        })}

        {// two different ways 
        }
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        )
        )}
      </ul>
      <div style={{ padding: 20 }}>
        <Button>buton örneği</Button>
        <Button variant="warning">button örneği</Button>
        <Button variant="success">button örneği</Button>
        <Button variant="danger">button örneği</Button>

      </div>


      <div style={{ padding: 20 }}>
      <button onClick={()=> setActiveTab(2)}>
      Aktif tabı değiştir
      </button>
      
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} >
        <Tab.Panel title='Profil'>1.tab</Tab.Panel>
        <Tab.Panel title='Hakkimda'>2.tab</Tab.Panel>
        <Tab.Panel title='Hizmetler'>3.tab</Tab.Panel>
        </Tab>
      </div>


    </>


  )
}

export default App;
