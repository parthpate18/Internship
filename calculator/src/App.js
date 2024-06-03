import React from 'react'
import add from './Components/Add'
import sub from './Components/Sub'
import mult from './Components/Mult'
import div from './Components/Div'
function App(){
  return(<>
  <ul>
    <li>sum of two no is {add(40,50)}</li>
    <li>Sub of two no is {sub(40,50)}</li>
    <li>Mult of two no is {mult(40,50)}</li>
    <li>Div of two no is {div(40,50)}</li>
  </ul>

  </>)
}

export default App
