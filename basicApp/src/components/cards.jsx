import '../css/cards.css'

// Using props for setting dynamic data in this component
function Cards(props){
    console.log(props)
    return(
        <div className="cards_container">
            <div className="card_item">
                <img src={props.data.image} alt="image" />
                <p>{props.data.description}</p>
                <button className="btnn">testing button</button>
            </div>
        </div>
    )
}

export default Cards