import React from 'react'
import { useEffect,useState } from 'react'
function App() {
  const [BackendData,setBackendData]=useState([{}])
  const [weatherData,setWeatherData]=useState([{}])
  useEffect(()=>{
    fetch('/api')
    .then(res=>res.json())
    .then(data=>setBackendData(data))
  },[])
  useEffect(()=>{
    fetch('/api2')
    .then(res=>res.json())
    .then(data=>setWeatherData(data))
  },[])

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Data I created</h1>
      {(typeof BackendData.users==="undefined")? (
        <div>loading</div>
      ):(
        <div >
          {BackendData.users.map((user, i)=>(
            <div key={(i)} style={{margin:"10px",border:"1px solid black",padding:"10px",borderRadius:"10px",display:"inline-block",alignItems:"center"}}>{user}</div>
          ))}
          <h1 style={{textAlign:"center"}}>Data from external Endpoint</h1>
          {Object.entries(weatherData).map(([key, value]) => (
        <div key={key} style={{margin:"10px",border:"1px solid black",padding:"10px",borderRadius:"10px",display:"inline-block",alignItems:"center"}}>
          <strong>{key}:</strong> {JSON.stringify(value)}
        </div>
      ))}
        </div>
      )}
    </div>
  )
}

export default App