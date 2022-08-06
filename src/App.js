
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="container my-5">
      <div class="card text-center my-5">
  <div class="card-body">
   <h1> Counter App</h1>
   <div className='my-5'> 
     <h2 className='my-5'>{count}</h2>
     <button type="button" class="btn btn-primary mx-3" onClick={() => setCount(count+1)}>Increment</button>
     <button type="button" class="btn btn-danger mx-3" onClick={() => setCount(count-1)} disabled={count===0}>Decrement</button>
     <button type="button" class="btn btn-success mx-3" onClick={() => setCount(0)} disabled={count===0}>Reset</button>
   </div>
  </div>
</div>
      
    </div>
  );
}

export default App;
