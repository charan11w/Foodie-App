import React from 'react'
import '../../styles/items.css'
import { FaSearch } from 'react-icons/fa';

const Items = () => {
  return (
    <div className='container items-cont'>
      <div>
        <div className='header-item'>
          <div className='left'>All products</div>

          <div className='center'>
            <div className="filter">
              <input type='checkbox' id="veg" />
              <label htmlFor="veg">Veg</label>
            </div>
            <div className="filter">
              <input type='checkbox' id="non-veg" />
              <label htmlFor="non-veg">Non-Veg</label>
            </div>
          </div>

          <div className='right'>
            <input type='text' placeholder='Search for items...' />
            <FaSearch className="search-icon" />
          </div>
        </div>

        <div className='all-items'>
          <div className='filters'>
            <div className='filter-option'>
              <input type='checkbox' id="pizza" />
              <label htmlFor="pizza">Pizza</label>
            </div>
            <div className='filter-option'>
              <input type='checkbox' id="chats" />
              <label htmlFor="chats">Chats & Streetfood</label>
            </div>
            <div className='filter-option'>
              <input type='checkbox' id="burger" />
              <label htmlFor="burger">Burger</label>
            </div>
            <div className='filter-option'>
              <input type='checkbox' id="chicken" />
              <label htmlFor="chicken">Kabab & Chicken</label>
            </div>
          </div>

          <div className='items'>
            <div className='row'>
              <div className='col'>item</div>
              <div className='col'>item</div>
              <div className='col'>item</div>
              {/* Add more items as needed */}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Items
