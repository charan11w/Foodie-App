import React from 'react'
import '../../styles/items.css'

const Items = () => {
  return (
    <div className='container items-cont'>
      <div>
        <div className='contanier'>
          all products
          <input type='checkbox' id="veg" />
          <label for="veg" >Veg</label>
          <input type='checkbox' id="non-veg" />
          <label for="non-veg" >Non-Veg</label>
          <input type='text' placeholder='Search for items...' />
        </div>
        <div className='all-items'>
          <div>
            <label for="pizza" >pizza</label>
            <input type='checkbox' id="pizza" />
            <label for="chats" >Chats & Streetfood</label>
            <input type='checkbox' id="chats" />
            <label for="burger" >burger</label>
            <input type='checkbox' id="burger" />
            <label for="chicken" >kabab & chicken</label>
            <input type='checkbox' id="chicken" />
          </div>
          <div>
            <div className='row'>
              <div className='col-4'>
                item
              </div>
              <div className='col-4'>
                item
              </div>
              <div className='col-4'>
                item
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Items
