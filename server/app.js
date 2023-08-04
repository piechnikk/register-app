const express = require("express")

const app = express()

app.use(express.json()); // remember the header in the fetch

// app.use(express.text()) // in case of data problems, use text()

const PORT = 3000;

var usersTab = []


app.post("/", function (req, res) {
    console.log(req.body)
    if(req.body.adding){
        let find = usersTab.find((el) => {
            return el.username == req.body.username
        })
        if (usersTab.length == 0 || find == undefined) {
            usersTab.push({ username: req.body.username, password: req.body.password, registered: new Date().toLocaleString() })
            res.send({ alert: false, tab: usersTab })
        } else {
            res.send({ alert: true })
        }
    }else{
        res.send({ alert: false, tab: usersTab })
    }
})

app.post("/delete", function (req, res) {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    usersTab.splice(req.body.index, 1)
    res.send(usersTab)

})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})