const express = require('express');
const Users = require('./config');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


app.get("/", async(req, res)=> {

    const snapshot = await User.get();
    const list = snapshot.docs.map((doc) => ({id: doc.id,...doc.data}))
    console.log("All users", list);

})

app.post("/create", async(req, res) => {

    const data = req.body
    await Users.add();
    res.send({msg:"User was added"});
    console.log("User added", data);
})

app.listen(4000, ()=> {
    console.log("Server is up and running....");
})