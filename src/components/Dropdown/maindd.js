import React from 'react';
import './index.css';
import Dropdown from './index';

const items = [
  {
    id: 1,
    value: 'Case',
  },
  {
    id: 2,
    value: 'Drinkward',
  },
  {
    id: 3,
    value: 'East',
  },
];

function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Earn points for your dorm!{' '}
        <span role="img" aria-label="dorm friends">
            😊😊😊
        </span>
      </h1>
      <Dropdown title="Select dorm" items={items} multiSelect />
    </div>
  );
}

export default App;