
import Card from "./cards"
import {content} from '../data.js' 

export default function Cards(){
    return(
        <div className="cards_section">
      {/* <Cards {...content[0]} /> 
      <Cards {...content[1]} /> 
      <Cards {...content[2]} />  */}
      {content.map((item) =>  (< Card data={item}/>))}
      </div>
    )
}