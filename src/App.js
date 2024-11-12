import React, { useState, useEffect } from 'react';
import GadgetList from './GadgetList';
import GadgetForm from './GadgetForm';
import gadgetsData from './gadgets.json';
import './App.css'

const App = () => {
  const [gadgets, setGadgets] = useState([]);
  const [newGadget, setNewGadget] = useState({ name: '', category: '', image: '' });

  // Load initial data with useEffect
  useEffect(() => {
    setGadgets(gadgetsData);
  }, []);

  // Function to add new gadget
  const addGadget = () => {
    if (newGadget.name && newGadget.category && newGadget.image) {
      setGadgets([
        ...gadgets,
        { ...newGadget, id: Date.now() }
      ]);
      setNewGadget({ name: '', category: '', image: '' });
    }
  };

  return (
    <div>
      
      <GadgetForm newGadget={newGadget} setNewGadget={setNewGadget} addGadget={addGadget} />
      <GadgetList gadgets={gadgets} />
    </div>
  );
};

export default App;
