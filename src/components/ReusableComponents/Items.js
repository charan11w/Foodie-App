import React from 'react'
import '../../styles/items.css'
import { FaSearch } from 'react-icons/fa';
import productImage from '../../images/nimage.png'
import { useSelector } from 'react-redux';
const Items = () => {

  const {selectedRestaurant} =useSelector(state => state.restaurants)
  const {name} = selectedRestaurant
  return (
    <div className='container items-cont'>
      <div>
        <div className='header-item'>
          <div className='left'>
            All products
          </div>

          <div className='center'>
            <div className="filter">
              <input type='checkbox' id="veg" />
              <label htmlFor="veg" className='vi'>Veg</label>
            </div>
            <div className="filter">
              <input type='checkbox' id="non-veg" />
              <label htmlFor="non-veg" className='nvi'>Non-Veg</label>
            </div>
          </div>

          <div className='right'>
            <input type='text' placeholder='Search for items...' className='food-search' />
            <button className='food-search-btn'>Search</button>
          </div>
        </div>

        <div className='all-items'>
          <div className='filters'>
            <h3>Filters</h3>
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

          <div className='products'>
            <div className='product'>
              <img src={productImage} className='product-image' />
              <div className='product-details'>
                <div className='restaurantName'>{name}</div>
                <div className='product-name'>Crunch masala byryani </div>
                <div className='product-price'>777.00&#8377;</div>
              </div>
            </div>
            <div className='product'>
              <img src={productImage} className='product-image' />
              <div className='product-details'>
                <div className='restaurantName'>{name}</div>
                <div className='product-name'>Crunch masala byryani </div>
                <div className='product-price'>777.00&#8377;</div>
              </div>
            </div>
            <div className='product'>
              <img src={productImage} className='product-image' />
              <div className='product-details'>
                <div className='restaurantName'>{name}</div>
                <div className='product-name'>Crunch masala byryani </div>
                <div className='product-price'>777.00&#8377;</div>
              </div>
            </div>
            <div className='product'>
              <img src={productImage} className='product-image' />
              <div className='product-details'>
                <div className='restaurantName'>{name}</div>
                <div className='product-name'>Crunch masala byryani </div>
                <div className='product-price'>777.00&#8377;</div>
              </div>
            </div>
            <div className='product'>
              <img src={productImage} className='product-image' />
              <div className='product-details'>
                <div className='restaurantName'>{name}</div>
                <div className='product-name'>Crunch masala byryani </div>
                <div className='product-price'>777.00&#8377;</div>
              </div>
            </div>
            <div className='product'>
              <img src={productImage} className='product-image' />
              <div className='product-details'>
                <div className='restaurantName'>{name}</div>
                <div className='product-name'>Crunch masala byryani </div>
                <div className='product-price'>777.00&#8377;</div>
              </div>
            </div>
            <div className='product'>
              <img src={productImage} className='product-image' />
              <div className='product-details'>
                <div className='restaurantName'>{name}</div>
                <div className='product-name'>Crunch masala byryani </div>
                <div className='product-price'>777.00&#8377;</div>
              </div>
            </div>
            <div className='product'>
              <img src={productImage} className='product-image' />
              <div className='product-details'>
                <div className='restaurantName'>{name}</div>
                <div className='product-name'>Crunch masala byryani </div>
                <div className='product-price'>777.00&#8377;</div>
              </div>
            </div>
            <div className='product'>
              <img src={productImage} className='product-image' />
              <div className='product-details'>
                <div className='restaurantName'>{name}</div>
                <div className='product-name'>Crunch masala byryani </div>
                <div className='product-price'>777.00&#8377;</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Items
