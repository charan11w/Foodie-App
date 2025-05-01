import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchItems } from '../../redux-slices/ItemSlice'
import productImage from '../../images/nimage.png'
import '../../styles/items.css'
import { Box, Modal } from '@mui/material';
import ShowItem from './ShowItem';
import { selectItem } from '../../redux-slices/CartSlice';

const Items = () => {
  const dispatch = useDispatch();
  const { selectedRestaurant } = useSelector(state => state.restaurants);
  const { filteredItems } = useSelector(state => state.items);
  console.log(filteredItems, "filtered")
  const { name } = selectedRestaurant;

  const [foodItems, setFoodItems] = useState([]);
  const [isVeg, setIsVeg] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [show, setShowItem] = useState(false);



  const handleOpen = (item) => {
    setShowItem(true)
    dispatch(selectItem(item))
  }

  const handleClose = () => {
    setShowItem(false)
  }


  useEffect(() => {
    setFoodItems(filteredItems)
  }, []);

  useEffect(() => {
    let filtered = filteredItems;

    // Type filter (veg / non-veg)
    if (isVeg && !isNonVeg) {
      filtered = filtered.filter(item => item.type.toLowerCase() === 'veg');
    } else if (!isVeg && isNonVeg) {
      filtered = filtered.filter(item => item.type.toLowerCase() === 'non-veg');
    } else if (!isVeg && !isNonVeg) {
      filtered = filteredItems;
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(item => selectedCategories.includes(item.category));
    }

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFoodItems(filtered);
  }, [filteredItems, isVeg, isNonVeg, selectedCategories, searchTerm]);

  const handleVegChange = (e) => {
    setIsVeg(e.target.checked);
  };

  const handleNonVegChange = (e) => {
    setIsNonVeg(e.target.checked);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.id;
    if (e.target.checked) {
      setSelectedCategories(prev => [...prev, category]);
    } else {
      setSelectedCategories(prev => prev.filter(cat => cat !== category));
    }
  };

  return (
    <div className='container items-cont'>
      <div>
        <div className='header-item'>
          <div className='left'>
            All products
          </div>

          <div className='center'>
            <div className="filter">
              <input type='checkbox' id="veg" checked={isVeg} onChange={handleVegChange} />
              <label htmlFor="veg" className='vi'>Veg</label>
            </div>
            <div className="filter">
              <input type='checkbox' id="non-veg" checked={isNonVeg} onChange={handleNonVegChange} />
              <label htmlFor="non-veg" className='nvi'>Non-Veg</label>
            </div>
          </div>

          <div className='right'>
            <input type='text' placeholder='Search for items...' className='food-search' onChange={(e) => setSearchTerm(e.target.value)} />
            <button className='food-search-btn'>Search</button>
          </div>
        </div>

        <div className='all-items'>
          <div className='filters'>
            <h3>Filters</h3>
            <div className='filter-option'>
              <input type='checkbox' id="Pizza" onChange={handleCategoryChange} />
              <label htmlFor="Pizza">Pizza</label>
            </div>
            <div className='filter-option'>
              <input type='checkbox' id="Chats & Streetfood" onChange={handleCategoryChange} />
              <label htmlFor="Chats & Streetfood">Chats & Streetfood</label>
            </div>
            <div className='filter-option'>
              <input type='checkbox' id="Burger" onChange={handleCategoryChange} />
              <label htmlFor="Burger">Burger</label>
            </div>
            <div className='filter-option'>
              <input type='checkbox' id="Kabab & Chicken" onChange={handleCategoryChange} />
              <label htmlFor="Kabab & Chicken">Kabab & Chicken</label>
            </div>
          </div>

          <div className='products'>
            {foodItems.map((item, index) => (
              <div className='product' key={index} onClick={() => handleOpen(item)}>
                <img src={productImage} className='product-image' alt={item.name} />
                <div className='product-details'>
                  <div className='restaurantName'>{name}</div>
                  <div className='product-name'>{item.name}</div>
                  <div className='product-price'>{item.price}.00&#8377;</div>
                </div>
              </div>
            ))}
          </div>
          <Modal open={show} onClose={handleClose}>
            <Box
              sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1300,
              }}
              onClick={handleClose} 
            >
              <div onClick={(e) => e.stopPropagation()}>
                <ShowItem  onClose={handleClose}/>
              </div>
            </Box>
          </Modal>

        </div>

      </div>
    </div>
  );
};

export default Items;
