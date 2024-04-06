export default function City(props) {
    return (
        <div className="city">
        <div className="title">{props.city}</div>
        <div className="card-container">
        {props.hotels.map((item) => {
            return (
                <div className="list-hotel-container">
                <img className="hotel-img" src={item.image}/>
                <div className="hotel-name">{item.name}</div>
                </div>
            )
        })}
        </div>
        </div>
    )
}