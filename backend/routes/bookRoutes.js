const express = require('express');

const {

    addBook,
    getBooks,
    checkoutBook,
    returnBook,
    deleteBook

} = require('../controllers/bookController');

const authMiddleware = require('../middleware/authMiddleware');

const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/addbook',
    authMiddleware,
    roleMiddleware,
    addBook
);

router.get('/getbooks',getBooks);

router.put('/checkout/:id',
    authMiddleware,
    checkoutBook
);

router.put('/return/:id',
    authMiddleware,
    returnBook
);

router.delete('/delete/:id',
    authMiddleware,
    roleMiddleware,
    deleteBook
);

module.exports = router;