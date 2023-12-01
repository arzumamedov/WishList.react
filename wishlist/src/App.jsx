import React from 'react'
import { useState, useEffect } from 'react';

function App() {




  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);






  const [data, setData] = useState([]);
  const [wishList, setWishList] = useState([])



  useEffect(() => {
    getProductFetch();
  }, []);

  async function getProductFetch() {
    const data = await fetch("https://fakestoreapi.com/products");
    const res = await data.json();
    setData(res);
  }


  function addwishlist(item) {
    setWishList([...wishList, item])

  }


  function removewishlist(id) {
    setWishList(wishList.filter((x) => x.id !== id))
  }

  function toggle() {
    document.body.classList.toggle('dark')
  }


  return (
    <div className='app'>

      <header className="App-header">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <i class="fa-solid fa-moon"></i> : <i class="fa-regular fa-sun"></i>}
        </button>
      </header>




      <h1>WhishList</h1>
      <div style={{ width: 300 }} className='wishlist'>
        {wishList.map((item) => (
          <ul key={item.id}>
            <button onClick={() => removewishlist(item.id)}><i className="fa-solid fa-heart"></i></button>
            <img src={item.image} alt="" />
            <li>ID:{item.id}</li>
            <li>TITLE:{item.title}</li>
            <li>PRICES:{item.price}$</li>
            <li>DESCRIPTION:{item.description}</li>
          </ul>
        ))}
      </div>
      <div className='data'>
        {data.map((x) => (
          <ul key={x.id}>
            <button onClick={() => addwishlist(x)}><i className="fa-regular fa-heart"></i></button>
            <img src={x.image} alt="" />
            <li>ID:{x.id}</li>
            <li>TITLE:{x.title}</li>
            <li>PRICES:{x.price}$</li>
            <li>DESCRIPTION:{x.description}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default App