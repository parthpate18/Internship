import React  from 'react';
import ComA from './ComA';
import './App.css';

export const FirstName = React.createContext();
export const LastName = React.createContext();
function App() {
  return (<>
    <FirstName.Provider value={"Trushang"}>
    <LastName.Provider value={"Patel"}>
      <ComA/>
    </LastName.Provider>
    </FirstName.Provider>
  </>);
}

export default App;

