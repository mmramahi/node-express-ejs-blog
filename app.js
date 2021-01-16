const express = require("express");
const morgan = require("morgan");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews');

// listen for requests
app.listen(3000);

// middelware & static files
app.use(express.static("public"));

// log middelware
app.use(morgan("dev"));

// some data for blogs

let blogs = [
  {
    title: "Node.js",
    snippit:
      "Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.",
    body:
      "Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
  },
  {
    title: "Express.js",
    snippit:
      "Express.js, or simply Express, is a back end web application framework for Node.js.",
    body:
      "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
  },
  {
    title: "What is EJS?",
    snippit:
      "What is the 'E' for? 'Embedded?' Could be. How about 'Effective,''Elegant,' or just 'Easy'?'",
    body:
      "EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.",
  },
];

app.get("/", (req, res) => {
  //res.send('<p>home page</p>');
  res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  //res.send('<p>home page</p>');
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  //res.send('<p>home page</p>');
  res.render("create", { title: "New blog" });
});
// redirects
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});
// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
