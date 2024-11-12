import React from 'react';
import './App.css'; // Importing global styles

const GadgetList = ({ gadgets }) => {
  return (
    <div className="gadget-list-container">
      <h2 className="list-title">Phone List</h2>
      <div className="gadget-list">
        {gadgets.map((gadget) => (
          <div className="gadget-item" key={gadget.id}>
            <img src={gadget.image} alt={gadget.name} className="gadget-image" />
            <h3 className="gadget-name">{gadget.name}</h3>
            <p className="gadget-category">Category: {gadget.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GadgetList;
