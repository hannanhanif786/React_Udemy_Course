import { useState } from 'react';

import Navbar from './components/Navbar'
import Cards from './components/cards'
import Button from './components/button'
import Info from './components/Info'
import {content} from './data.js' 
import {data} from './cardData.js'
import './App.css'


function App() {

  const [text, setText] = useState(false);

  console.log("For testing : ",text)
  function displayMessage(selectedText){
    setText("Enter the button for show display")
    if(text){setText(selectedText)}
}

  return(
    <>
      <Navbar />
      <div className="cards_section">
      {/* <Cards {...content[0]} /> 
      <Cards {...content[1]} /> 
      <Cards {...content[2]} />  */}
      {content.map((item) =>  (< Cards data={item}/>))}
      </div>
      <div className="button_section">
      <Button className="btn" onSelect = {() => displayMessage("java")} label="Java"/>
      <Button className="btn"  onSelect = {() => displayMessage("JS")} label="JS"/>
      <Button className="btn" onSelect = {() => displayMessage("Python")}  label="Python "/>
      </div>
        <br />
        <br />
        <br />
        <p>{text}</p>

        <div className='info_contianer'>
          {data.map((detail) => (<Info {...detail}/>))}
      </div>
    </>
  )
}

export default App