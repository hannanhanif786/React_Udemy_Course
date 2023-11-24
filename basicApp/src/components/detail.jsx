import Info from "./Info"
import {data} from "../cardData"

export default function Detail(){
    return(
        <div className='info_contianer'>
          {data.map((detail) => (<Info {...detail}/>))}
      </div>
    )
}