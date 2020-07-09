const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res)  => {
const firstName = req.body.firstName.trim();
const lastName = req.body.lastName.trim();
const email = req.body.email.trim();
const password = req.body.password.trim();
const username = req.body.username.trim();
const birthday = req.body.birthday.trim();
const picURl = req.body.picURl.trim();
db.User.create({ firstName, lastName, email, password, username, picURl, birthday })
.then(() => {
    res.json({
        success: true
    });
}).catch((err) => {
    console.log(err)})
})

router.get(":id", (req, res) => {
db.User.findOne({
    where:{
        id: req.params.id
},
}
).then(user => res.json(user));
});