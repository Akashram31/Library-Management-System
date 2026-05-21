const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    author:{
        type:String,
        required:true
    },

    genre:{
        type:String,
        required:true
    },

    isbn:{
        type:String,
        required:true,
        unique:true
    }, 

    availability:{
        type:Boolean,
        default:true
    },

    borrowedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        default:null
    }

});

bookSchema.index({title:1});
bookSchema.index({author:1});

module.exports = mongoose.model('Book',bookSchema);