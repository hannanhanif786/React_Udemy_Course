import { useState } from 'react';

import Button from "./button";

export default function Buttons(){

    const [text, setText] = useState("Select any button");

  function displayMessage(selectedText){
    if(text){setText(selectedText)}
}

    return(
        <>
        <section className="button_section">
      <Button className="btn" onClick = {() => displayMessage("java")}>Java</Button>,
      <Button className="btn"  onClick = {() => displayMessage("JS")}>Python</Button>
      <Button className="btn" onClick = {() => displayMessage("Python")}>JS</Button>
        </section>
      <br />
      <br />
      <br />
      <p>{text}</p>
      </>
    )
}