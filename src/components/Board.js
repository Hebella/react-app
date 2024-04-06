export default function Board(props) {
    const priceRange = ["Below $100", "$100-200", "$200-300", "Above $300"]
    const starRating = [1, 2, 3, 4, 5]

    const reset = () => {
        let elements = document.getElementsByTagName("input");
        for(let i = 0; i < elements.length; i++) {
            elements[i].checked = false;
        }
        props.selectPrice("All")
        props.selectStar("All")
        props.selectOrder("Default")
    }
    

    return(
        <div className="board">
            <div className="button-container">
            <div>
            <button className="click-button" onClick={() => props.showMyList()}>{props.updateButton(props)}</button>
            </div>

            <div className="board-reset-container">
            <button className="click-button" onClick={reset}>Reset Filters</button>
            </div>
            </div>

            <div className="board-filter-container">
            <div className="filter-title">Price: </div>

            <div className="board-button-container">
                {priceRange.map((price) => {
                    return(
                        <div className="board-button">
                            <label className="filter-container">{price}
                            <input type="radio" name="price" onClick={() => props.selectPrice(price)}/>
                            <span class="checkmark"></span>
                            </label>
                        </div>
                )})}
            </div>
            </div>

            <div className="board-filter-container">
            <div className="filter-title">Star rating: </div>

            <div className="board-button-container">
                {starRating.map((star) => {
                    return(
                        <div className="board-button">
                            <label className="filter-container">{star}★
                            <input type="radio" name="star" onClick={() => props.selectStar(star)}/>
                            <span className="checkmark"></span>
                            </label>
                        </div>
                )})}
            </div>
            </div>

            <div className="board-filter-container">
            <div className="filter-title">Sort by: </div>

            <div className="board-button-container">
                <div className="board-button">
                <label className="filter-container">Price Low to High
                <input type="radio" name="sortByPrice" onClick={() => props.selectOrder("Ascending")}/>
                <span className="checkmark"></span>
                </label>
                </div>

                <div className="board-button">
                <label className="filter-container">Price High to Low
                <input type="radio" name="sortByPrice" onClick={() => props.selectOrder("Descending")}/>
                <span className="checkmark"></span>
                </label>
                </div>
            </div>

            </div>

            

        </div>
    )
}