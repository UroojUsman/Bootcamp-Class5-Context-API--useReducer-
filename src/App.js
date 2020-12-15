import React ,{useState}from 'react';
import Parent from './Parent'
import CounterContext from './CounterContext'

function App() {
  let Counter= useState(0);
  return (
    
    <div>
      <CounterContext.Provider value={Counter}>
        <Parent/>
        </CounterContext.Provider>
    </div>
  );
}

export default App;
