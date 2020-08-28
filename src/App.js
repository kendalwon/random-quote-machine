import React from 'react';
import './App.css';

function App() {
  return (
    <div id="app">
      <div id="quote-box">
        <h1 id="text">text</h1>
        <h2 id="author">author</h2>
        <div id="flex">
          <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
          <button id="new-quote">New Quote</button>
          
        </div>
        
      </div>
    </div> 
  );
}

export default App;
