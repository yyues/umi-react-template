import React from 'react';

function App() {
  return (
    <div
      className="flex bg-orange-400 p-4 h-full bg-slate-600"
      style={{ background: '#d4d4d8' }}
    >
      <div className="w-1/4 mr-4 shadow h-full">left</div>
      <div className="flex-1 mr-4 shadow h-full">right</div>
    </div>
  );
}

export default App;
