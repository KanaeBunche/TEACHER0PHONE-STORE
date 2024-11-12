import React from 'react';
import './App.css'; // Importing global styles

const GadgetForm = ({ newGadget, setNewGadget, addGadget }) => {
  return (
    <div className="gadget-form-container">
      <h2 className="form-title">Add New Phone</h2>
      <div className="form-inputs">
        <input
          type="text"
          placeholder="Name"
          value={newGadget.name}
          onChange={(e) => setNewGadget({ ...newGadget, name: e.target.value })}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Category"
          value={newGadget.category}
          onChange={(e) => setNewGadget({ ...newGadget, category: e.target.value })}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newGadget.image}
          onChange={(e) => setNewGadget({ ...newGadget, image: e.target.value })}
          className="input-field"
        />
      </div>
      <button className="add-button" onClick={addGadget}>Add Gadget</button>
    </div>
  );
};

export default GadgetForm;
