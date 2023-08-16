const express = require("express");
const app = express();
require("dotenv").config();
//const createconnection = require("../crud/dbconnection/mongoConnection");
// const blog = require("./model/blog");
const ejs = require("ejs");
// const mongoose = require("mongoose");
// const crud = require("./controller/crud");
 const bodyParser = require("body-parser");
 const path = require("path");


app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

//createconnection();
// creatinng express App

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.json());

app.get("/", (req, res) => {
 // res.send({ Message: "Hellow World" });
 res.render("login");
});


app.post("/submit", (req, res) => {
    // Handle form submission here
  //  const formData = req.body.data; // Get the submitted data from the form
   //res.send({ Message: "Hellow World" });
    // Redirect to the next page
    //res.render("scform");
    res.render("add_branch");
  });



  app.get("/add_location", (req, res) => {
    // Handle form submission here
  //  const formData = req.body.data; // Get the submitted data from the form
   //res.send({ Message: "Hellow World" });
    // Redirect to the next page
    //res.render("scform");
    res.render("add_locationsy");
  });

  app.get("/add_branch", (req, res) => {
    // Handle form submission here
  //  const formData = req.body.data; // Get the submitted data from the form
   //res.send({ Message: "Hellow World" });
    // Redirect to the next page
    //res.render("scform");
    res.render("add_branch");
  });

// app.get("/edit/:id", async (req, res) => {
//   const myid = req.params.id;

//   try {
//     const myitem = await blog.findById(myid);
//     res.render("edit", { myitem });
//   } catch (err) {
//     res.status(500).send("Error retrieving item");
//   }
// });

// // Route to handle the item update
// app.post("/edit/:id", async (req, res) => {
//   const myids = req.params.id;

//   const { title, subtitle, body } = req.body;

//   try {
//     await blog.findByIdAndUpdate(myids, { title, subtitle, body });

//     res.redirect("/getblog");
//   } catch (err) {
//     res.status(500).send("Error updating item");
//   }
// });




// app.post("/createBlog", crud.createBlog);
// app.get("/getBlog", crud.getBlog);
// app.get("/getBlog/:id", crud.getBlogById);
// //app.put("/updatedBlog/:id",crud.updatedBlogById);

// app.get("/getusers",crud.getUsers);

//  app.get("/createUsers",crud.createUser);

app.listen(process.env.PORT);
