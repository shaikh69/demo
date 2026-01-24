import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ActiveHook from './components/ActiveHook';
import { hooksData } from './data/hooksData';
import './App.css';

function App() {
  const [activeHookId, setActiveHookId] = useState(hooksData[0].id);

  const activeHook = hooksData.find(h => h.id === activeHookId);

  return (
    <div className="app-container">
      <Sidebar 
        hooks={hooksData} 
        activeHook={activeHookId} 
        onSelectHook={setActiveHookId} 
      />
      <ActiveHook hook={activeHook} />
    </div>
  );
}

export default App;
