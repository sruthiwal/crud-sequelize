module.exports = function (app) {
  const book = require("../controller/book.controller.js");
  app.post("/api/book", book.create);
  app.get("/api/books", book.findAll);
  app.put("/api/books/:bookId", book.update);
  app.delete("/api/books/:bookId", book.delete);
};
