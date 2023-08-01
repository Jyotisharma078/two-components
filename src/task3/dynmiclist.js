import React, { useState } from 'react';
const dynmic_list= {
  width: '100%',
 height: '200px',
 backgroundColor:'pink',
 color:'black',
 paddingTop: '10px',
 paddingBottom: '10px',
 textAlign:'center',
 display: 'flex',
flexDirection: 'column',
};
const DynamicList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (indexToRemove) => {
    setItems(items.filter((item, index) => index !== indexToRemove));
  };

  return (
    <div style={dynmic_list} alt="dynmic_list">
      <h2>Dynamic List</h2>
      <ul style={{alignItems:'center',display:'flex',flexDirection: 'column'}}>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={handleAddItem}>Add more</button>
      </div>
    </div>
  );
};

export default DynamicList;
