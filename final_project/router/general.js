const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {

  if (req.body.email) {
      users[req.body.email] = {
          "firstName": req.body.firstName,
          "lastName": req.body.lastNameName,
          "dateOfBirth": req.body.DOB,
      };
  }
  // Send response indicating user addition
  res.send("The user" + (' ') + (req.body.firstName) + " Has been added!");
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  res.send(JSON.stringify(books,null,4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  res.send(books[isbn]);
});
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const author = req.params.author;
    res.send(books[author]);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const title = req.params.title;
    res.send(books[title]);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    const review = req.params.review;
    res.send(books[review]);
});

module.exports.general = public_users;
