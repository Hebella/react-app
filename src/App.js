import './App.css';
import hotels from "./hotels.json"
import { useState } from 'react';
import Board from './components/Board';
import Body from './components/Body';

function App() {
  const[price, setPrice] = useState("All")
  const[star, setStar] = useState("All")
  const[order, setOrder] = useState("Default")
  const[count, setCount] = useState(0)
  const[showList, setShowList] = useState(false)
  const[myList, setMyList] = useState(new Map())

  const selectPrice = (value) => {
    setPrice(value)
  }

  const selectStar = (value) => {
    setStar(value)
  }

  const selectOrder = (value) => {
    setOrder(value)
  }

  const updateCount = (value) => {
    setCount(value)
  }

  const updateList = (item) => {
    var hotelArr = []
    if (myList.get(item.city) != undefined) {
      hotelArr = myList.get(item.city)
    }
    if (item.isSaved) {
      hotelArr = [...hotelArr, item]
    } else {
      var index = hotelArr.indexOf(item)
      if (index != -1) {
        hotelArr.splice(index, 1)
      }
    }
    setMyList(myList.set(item.city, hotelArr))
    console.log(myList)
  }

  const updateComponents = (shouldShowList) => {
    var elements = document.getElementsByClassName("all-hotels")
    for (let elem of elements) {
      if (!shouldShowList) {
        elem.style.display = "block";
      } else {
        elem.style.display = "none";
      }
    }
    elements = document.getElementsByClassName("board-filter-container")
    for (let elem of elements) {
      if (!shouldShowList) {
        elem.style.display = "block";
      } else {
        elem.style.display = "none";
      }
    }
    elements = document.getElementsByClassName("saved-hotels")
    for (let elem of elements) {
      if (shouldShowList) {
        elem.style.display = "block";
      } else {
        elem.style.display = "none";
      }
    }
    elements = document.getElementsByClassName("board-reset-container")
    for (let elem of elements) {
      if (shouldShowList) {
        elem.style.display = "none";
      } else {
        elem.style.display = "block";
      }
    }
  }

  const showMyList = () => {
    var shouldShowList = !showList
    if (showList) {
      setShowList(false)
    } else {
      setShowList(true)
    }
    updateComponents(shouldShowList)
  }

  const updateButton = (item) => {
    if (item.showList) {
        return "Back"
    } else {
        return "My List"
    }
}

  return (
    <div className="App">
      <Board
        selectPrice={selectPrice}
        selectStar={selectStar}
        selectOrder={selectOrder}
        showMyList={showMyList}
        updateButton={updateButton}
        showList={showList}
        price={price}
      />
      <Body
        hotels={hotels}
        price={price}
        star={star}
        order={order}
        count={count}
        myList={myList}
        updateCount={updateCount}
        updateList={updateList}
      />
    </div>
  );
}

export default App;
