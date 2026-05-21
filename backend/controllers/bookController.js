const Book = require('../models/Book');

exports.addBook = async(req,res)=>{

    try{

        const {title,author,genre,isbn} = req.body;

        const existingBook = await Book.findOne({isbn});

        if(existingBook){

            return res.status(400).json({
                message:'Book already exists'
            });

        }

        const newBook = new Book({
            title,
            author,
            genre,
            isbn
        });

        await newBook.save();

        return res.status(201).json({
            message:'Book added successfully'
        });

    }catch(err){

        return res.status(500).json({
            message:'Server error '+err.message
        });

    }

};

exports.getBooks = async(req,res)=>{

    try{

        const {title,author,genre} = req.query;

        let filter = {};

        if(title){
            filter.title = {$regex:title,$options:'i'};
        }

        if(author){
            filter.author = {$regex:author,$options:'i'};
        }

        if(genre){
            filter.genre = {$regex:genre,$options:'i'};
        }

        const books = await Book.find(filter);

        return res.status(200).json({
            data:books
        });

    }catch(err){

        return res.status(500).json({
            message:'Server error '+err.message
        });

    }

};

exports.checkoutBook = async(req,res)=>{

    try{

        const {id} = req.params;

        const book = await Book.findOneAndUpdate(

            {
                _id:id,
                availability:true
            },

            {
                availability:false,
                borrowedBy:req.user.id
            },

            {
                new:true
            }

        );

        if(!book){

            return res.status(400).json({
                message:'Book not available'
            });

        }

        return res.status(200).json({
            message:'Book checked out successfully',
            data:book
        });

    }catch(err){

        return res.status(500).json({
            message:'Server error '+err.message
        });

    }

};

exports.returnBook = async(req,res)=>{

    try{

        const {id} = req.params;

        const book = await Book.findByIdAndUpdate(

            id,

            {
                availability:true,
                borrowedBy:null
            },

            {
                new:true
            }

        );

        return res.status(200).json({
            message:'Book returned successfully',
            data:book
        });

    }catch(err){

        return res.status(500).json({
            message:'Server error '+err.message
        });

    }

};

exports.deleteBook = async(req,res)=>{

    try{

        const {id} = req.params;

        await Book.findByIdAndDelete(id);

        return res.status(200).json({
            message:'Book deleted successfully'
        });

    }catch(err){

        return res.status(500).json({
            message:'Server error '+err.message
        });

    }

};