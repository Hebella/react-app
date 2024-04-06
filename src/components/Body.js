import Hotel from "./Hotel"
import City from "./City"

export default function Body(props) {
    const priceLevel = new Map()
    priceLevel.set("Below $100", 0)
    priceLevel.set("$100-200", 1)
    priceLevel.set("$200-300", 2)
    priceLevel.set("Above $300", 3)

    const filterPirce = item => {
        if (props.price === "All") { 
          return true
        } else if (priceLevel.get(props.price) === null) {
            return false
        }

        const level = Math.min(3, Math.floor(item.price / 100))
        return (level === priceLevel.get(props.price))
    };

    const filterStar = item => {
        if (props.star === "All") { 
          return true
        } else if (item.star === props.star) {
            return true
        } else {
            return false
        }
    };

    const filterAll = item => {
        if (filterPirce(item) && filterStar(item)) {
          return true
        } else {
          return false
        }
    }

    const filteredHotels = props.hotels.filter((item) => {
        if (filterAll(item)) {
          return item
        }
    })

    const sortedHotels = filteredHotels.sort((a, b) => {
    
        if (props.order === "Default") {
          return a.name > b.name ? 1: -1
        } else if (props.order === "Ascending") {
          return a.price > b.price ? 1 : -1
        } else if (props.order === "Descending") {
          return a.price > b.price ? -1 : 1}
    })

    var cities = []
    if (props.myList.size > 0) {
        Array.from(props.myList.keys()).map((city) => {
            if (props.myList.get(city).length > 0) {
                cities = [...cities, city]
            }
        })
    }
    console.log(cities)

    const updateList = (item) => {
        if (item.isSaved) {
            item.isSaved = false
            props.updateCount(props.count - 1)
        } else {
            item.isSaved = true
            props.updateCount(props.count + 1)
        }
        props.updateList(item)
    }

    const updateLabel = (item) => {
        if (item.isSaved) {
            return "Unsave"
        } else {
            return "Save"
        }
    }

    return(
        <div className="body">
        
        <div className="all-hotels">
        {sortedHotels.map((item) => {
            return(
                <Hotel 
                    item={item}
                    updateLabel={updateLabel}
                    updateList={updateList}
                />
            )
        })}
        </div>
        <div className="saved-hotels">
        <h4>{props.count} hotels</h4>
        {cities.map((city) => {
            return(
                <City
                    hotels={props.myList.get(city)}
                    city={city}
                />
            )
        })}
        </div>

      </div>
    );
}