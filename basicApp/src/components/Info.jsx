
export default function Info(props){
    return(
        <div className="detailed_card">
            <h1>{props.title}</h1>
            <p> {props.description}</p>
        </div>
    )
}