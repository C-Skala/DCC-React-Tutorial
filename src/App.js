import React, { useState } from 'react';
import DisplayEntries from './Components/Display Entries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {
 
  const [entries, setEntries] = useState([{weight: 175, date: '11-3-2021'}, {weight: 180, date: '11-31-2021'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    
    setEntries(tempEntries);
  }
 
  return (
    <div>
      <DisplayEntries parentEntries = {entries} />
      <AddEntryForm addNewEntryProperty = {addNewEntry}/>
    </div>
  );
}

export default App;
