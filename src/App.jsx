import React, { useEffect, useState } from "react";
import Input from "./Inputxx";
import Display from "./Display";
import DisplayR from "./DisplayR";

function App() {
  const [items, setItems] = useState([]);
  const [itemsR, setItemsR] = useState([]);

  const getData = (data) => {
    setItems(
      [
        ...items,
        data
      ]
    )
  }

  const deleteAll = () => {
    return (
      // localStorage.removeItem('setValue'),
      // setItems([]),
      localStorage.removeItem('setValueR'),
      setItemsR([])
    )
  }

  const removeLi = (get) => {
    // console.log(get)
    const newData = items.filter(
      (d, i) => {
        return i !== get ? true : false;
      }
    );
    const xyz = items.filter(
      (d, i) => {
        return i == get ? true : false;
      }
    )
    setItems(newData)
    setItemsR([
      ...itemsR,
      xyz
    ])
  }

  const removeLiofR = (index) => {
    const newDataR = itemsR.filter(
      (d, i) => {
        return i !== index ? true : false;
      }
    )
    const xyzy = itemsR.filter(
      (d, i) => {
        return i == index ? true : false;
      }
    )
    setItemsR(newDataR)
    setItems([
      ...items,
      xyzy
    ])
  }


  useEffect(
    () => {
      const lsData = localStorage.getItem('setValue');
      if (lsData != null) {
        setItems(JSON.parse(lsData));
      }
      const lsDataR = localStorage.getItem('setValueR');
      if (lsDataR != null) {
        setItemsR(JSON.parse(lsDataR));
      }
    },
    []
  )

  useEffect(
    () => {
      const data = JSON.stringify(items);
      localStorage.setItem('setValue', data)
    },
    [items]
  )
  useEffect(
    () => {
      const data = JSON.stringify(itemsR);
      console.log(data);
      localStorage.setItem('setValueR', data)
    },
    [itemsR]
  )

  return (
    <div>
      <div className="container p-2">
        <div className="text-center fs-3 fw-semibold my-3">Task Application</div>
        <Input handler={getData} />
        <button className="btn btn-warning my-2" onClick={deleteAll}>Delete All</button>
        <hr />
        <div className="d-flex w-100 gap-3">
          <div className="w-50">
            <h4>Today Taks</h4>
            <Display items={items} remove={removeLi} /></div>
          <div className="w-50">
            <h4>Complete Taks</h4>
            <DisplayR itemsR={itemsR} removeR={removeLiofR} /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
