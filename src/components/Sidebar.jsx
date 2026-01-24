import React from 'react';
import './Sidebar.css';

const Sidebar = ({ hooks, activeHook, onSelectHook }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>React Hooks</h2>
      </div>
      <nav className="sidebar-nav">
        {hooks.map((hook) => (
          <button
            key={hook.id}
            className={`nav-item ${activeHook === hook.id ? 'active' : ''}`}
            onClick={() => onSelectHook(hook.id)}
          >
            {hook.title}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
