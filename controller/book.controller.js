const db = require("../config/db.config");
const Book = db.book;
// Post a Book
exports.create = (req, res) => {
  Book.create({
    name: req.body.name,
    price: req.body.price,
    language: req.body.language,
    total_pages: req.body.total_pages,
  }).then((book) => {
    res.status(200).json({
      status: true,
      message: "Book created successfully",
    });
  });
};
// Get all books
exports.findAll = (req, res) => {
  Book.findAll().then((books) => {
    res.status(200).json({
      status: true,
      data: books,
    });
  });
};
// Update a book
exports.update = (req, res) => {
  const id = req.params.bookId;
  Book.update(
    {
      name: req.body.name,
      price: req.body.price,
      language: req.body.language,
      total_pages: req.body.total_pages,
    },
    { where: { id: req.params.bookId } }
  ).then(() => {
    res.status(200).json({
        status: true,
        message: "Book updated successfully with id = " + id
    });
  });
};
// Delete a book by Id
exports.delete = (req, res) => {
  const id = req.params.bookId;
  Book.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).json({
        status: true,
        message: "Book deleted successfully with id = " + id
    });
  });
};
