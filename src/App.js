import React, { useState } from 'react';
import DisplayEntries from './Components/Display Entries/DisplayEntries';

function App() {
 
  const [entries, setEntries] = useState([{weight: 175, date: '11-3-2021'}, {weight: 180, date: '11-31-2021'}])
 
  return (
    <div>
      <DisplayEntries parentEntries = {entries} />
    </div>
  );
}

export default App;
