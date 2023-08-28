const express=require('express')
const axios = require('axios');
const app=express()

//data that I want to show on the frontend
app.get("/api", (req, res)=>{
    res.json({"users":["User1","User2","User3","User4"]})
})

//data thats taken from external endpoint and passed on to frontend
app.get("/api2", async (req, res)=>{
    try {
        const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41";
        
        const response = await axios.get(apiUrl);
        const responseData = response.data;
        
        res.json(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "An error occurred while fetching data." });
      }
})

app.listen(5001, ()=>{
    console.log("Server is running on port 5001")
})