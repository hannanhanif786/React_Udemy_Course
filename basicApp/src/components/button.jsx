import '../css/button.css'


export default function Button(props){


    return(
        <button className="btn" onClick={props.onSelect}>{props.label}</button>
    )
}