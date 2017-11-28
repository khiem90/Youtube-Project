import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD4IwTGWB7dV_K9gbPHT-_5XU4i2mtTKBw';

// Create component that produce HTML
const App = () => {
  return (
    <div>
    <SearchBar />
    </div>;
  );
}

// Component's generated HTML and display on page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
