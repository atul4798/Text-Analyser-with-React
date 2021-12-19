// import AboutUs from "./Components/AboutUs";
import Nav from "./Components/Nav";
import Text from "./Components/Text";
import React, { useState } from 'react'
import Alert from "./Components/Alert";





function App() {
  const [mode, setmode] = useState('light');
  const [msg, setmsg] = useState("");
  const [type, settype] = useState(null);
  
  const setMessage=(msg)=>{
    setmsg(msg);
    settype("success");
    setTimeout(() => {
      setmsg(null);
      settype(null);
      
    }, 2000);

  }

  const togglemode=()=>{

    if(mode==='light')
    {
      setmode('dark');
      document.body.style.color='White';
      document.body.style.background='#082043';
      settype('success');
      setmsg("Dark Mode Enabled!");
    }
    else
    {
      setmode('light');
      document.body.style.color='black';
      document.body.style.background='White';
      settype("success");
      setmsg("Light Mode Enabled!");
    }
    setTimeout(() => {
      setmsg(null);
      settype(null);
      
    }, 1000);
  }
  return (
  <>
  
  <Nav title="Nav" user="Atul" mode={mode} togglemode={togglemode}  />
  <Alert setmsg={msg} settype={type}/>

  <Text heading="Enter your text below." mode={mode} setmsg={setMessage}/> 

  {/* <AboutUs/> */}
    
  
 </>

  );
}

export default App;
