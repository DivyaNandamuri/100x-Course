//In memory hospital

const express = require("express")
const app = express();
const port = 3000;

var users = [{
    name:"John",
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]

app.get("/", function(req,res) {
    const allKidneys = users[0].kidneys;
    const noOfKidneys = allKidneys.length;
    let noOfHealthyKidneys =0;
    let noOfUnHealthyKidneys =0;
    for(let i =0 ;i<allKidneys.length; i++){
        if(allKidneys[i].healthy){
            noOfHealthyKidneys++;
        }
        else{
            noOfUnHealthyKidneys++;
        }
    }
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnHealthyKidneys
    })
})

app.use(express.json());

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})

app.put("/", function(req,res){
    for(let i =0;i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "put"
    })
})


app.listen(port, ()=>{
    console.log(`serving on port ${port}`)
});
