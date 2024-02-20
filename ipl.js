const express = require("express");
const fs = require("fs");
const Papa = require("papaparse");
const path = require('path'); // Corrected require statement
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.get('/',(req,res)=>{
    
    res.sendFile(path.join(__dirname,"src/server/home.html"))
})

app.get('/problem',(req,res)=>{
    res.sendFile(path.join(__dirname,"src/public/output/1_matchesPerYear.json"))
})
app.get('/problem/1',(req,res)=>{
    
    res.sendFile(path.join(__dirname,"src/server/problem1.html"))
})

//---------
    

app.get('/problem2',(req,res)=>{
    res.sendFile(path.join(__dirname,"src/public/output/2_matchesWonPerTeamPerYear.json"))
})
app.get('/problem/2',(req,res)=>{
    
    res.sendFile(path.join(__dirname,"src/server/problem2.html"))
})
//------------



app.get('/problem3',(req,res)=>{
    res.sendFile(path.join(__dirname,"src/public/output/3_extraRunsperTeamIn2016.json"))
})
app.get('/problem/3',(req,res)=>{
    
    res.sendFile(path.join(__dirname,"src/server/problem3.html"))
})




app.get('/problem4',(req,res)=>{
    res.sendFile(path.join(__dirname,"src/public/output/4_topEconomicalBowlers_2015.json"))
})
app.get('/problem/4',(req,res)=>{
    
    res.sendFile(path.join(__dirname,"src/server/problem4.html"))
})

//----

app.get('/problem5',(req,res)=>{
    res.sendFile(path.join(__dirname,"src/public/output/5_teamWonTossAndMatch.json"))
})
app.get('/problem/5',(req,res)=>{
    
    res.sendFile(path.join(__dirname,"src/server/problem5.html"))
})


//----------

app.get('/problem6',(req,res)=>{
    res.sendFile(path.join(__dirname,"src/public/output/6_PlayerOfTheMatches.json"))
})
app.get('/problem/6',(req,res)=>{
    
    res.sendFile(path.join(__dirname,"src/server/problem6.html"))
})

//-------

app.get('/problem7',(req,res)=>{
    res.sendFile(path.join(__dirname,"src/public/output/7_strikeRatePerSeason.json"))
})
app.get('/problem/7',(req,res)=>{
    
    res.sendFile(path.join(__dirname,"src/server/problem7.html"))
})


//--------------

app.get('/problem8',(req,res)=>{
    res.sendFile(path.join(__dirname,"src/public/output/8_highestDismissals.json"))
})
app.get('/problem/8',(req,res)=>{
    
    res.sendFile(path.join(__dirname,"src/server/problem8.html"))
})

//---------

app.get('/problem9',(req,res)=>{
    res.sendFile(path.join(__dirname,"src/public/output/9_bestEconomyBowlerInSuperOvers.json"))
})
app.get('/problem/9',(req,res)=>{
    
    res.sendFile(path.join(__dirname,"src/server/problem9.html"))
})








app.listen(3002, () => {
    console.log("Server is running at port 3001");
});

