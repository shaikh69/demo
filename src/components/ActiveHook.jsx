import React from 'react';
import UseStateDemo from './demos/UseStateDemo';
import UseEffectDemo from './demos/UseEffectDemo';
import UseContextDemo from './demos/UseContextDemo';
import './ActiveHook.css';


const DemoPlaceholder = ({ name }) => (
  <div className="demo-placeholder">
    Interactive demo for <code>{name}</code> is coming soon!
  </div>
);

const ActiveHook = ({ hook }) => {
  if (!hook) return <div className="no-selection">Select a hook to learn more</div>;

  const renderDemo = () => {
    switch (hook.id) {
      case 'useState':
        return <UseStateDemo />;
      case 'useEffect':
        return <UseEffectDemo />;
      case 'useContext':
        return <UseContextDemo />;
      default:
        return <DemoPlaceholder name={hook.title} />;
    }
  };

  return (
    <main className="active-hook-container">
      <header className="hook-header">
        <h1 className="hook-title">{hook.title}</h1>
        <p className="hook-description">{hook.description}</p>
        <a 
          href={hook.docsLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="docs-link"
        >
          Read Docs ↗
        </a>
      </header>

      <section className="hook-content">
        <div className="card">
          <h3>Interactive Demo</h3>
          <div className="demo-wrapper">
            {renderDemo()}
          </div>
        </div>

        <div className="card">
          <h3>Usage Example</h3>
          <pre className="code-block">
            <code>{hook.codeSnippet}</code>
          </pre>
        </div>
      </section>
    </main>
  );
};

export default ActiveHook;
