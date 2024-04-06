export default function Hotel(props) {
    var indents = [];
    for (var i = 0; i < props.item.star; i++) {
        indents.push(<div className="one-star">&#9733;</div>);
    }
    return (
        <div className="hotel-container">
        <img className="hotel-img" src={props.item.image}/>
        <div className="hotel-name">{props.item.name}</div>
        <div className="hotel-city">{props.item.city}</div>
        <div className="hotel-star">
        {indents}
        </div>
        <div>Price: ${props.item.price}</div>
        <button className="save-button" onClick={() => props.updateList(props.item)}>{props.updateLabel(props.item)}</button>
        </div>
    );
}