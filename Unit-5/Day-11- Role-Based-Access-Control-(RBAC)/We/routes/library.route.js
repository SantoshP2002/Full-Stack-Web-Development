const express = require("express");

const libraryRouter = express.Router();

libraryRouter.get("/manage-books", (req, res) => {
    // librarian
    console.log(req.user)
  res.send("Manage Books");
});

libraryRouter.get("/borrow-books", (req, res) => {
    // member
  res.send("Borrow Books");
});

libraryRouter.get("/return-books", (req, res) => {
    // member
  res.send("Return Books");
});

libraryRouter.get("/manage-member", (req, res) => {
    // librarian
  res.send("Manage Member");
});

libraryRouter.get("/update-profile", (req, res) => {
    // member, librarian
  res.send("Update Profile");
});

libraryRouter.get("/browse-catelog", (req, res) => {
    // guest, member, librarian
  res.send("Browse Catelog");
});

module.exports = libraryRouter;
