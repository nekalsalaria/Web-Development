import { useState } from "react";

const App = () => {
  const [dark,setDark] = useState(false)
  return(
    <div 
    style={{
      background:dark ?"black":"white",
      color:dark?"white":"black",
      minHeight:"100vh",
    }}>
      <h1>
      {dark?"Dark Mode":"Light Mode"}
    </h1>
    <button onClick={()=>setDark(!dark)} >Toggle Theme</button>
    </div>
  )
}

export default App