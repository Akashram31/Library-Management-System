const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async(req,res)=>{

    try{

        const {
            username,
            email,
            password,
            role,
            secretCode
        } = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){

            return res.status(400).json({
                message:'User already exists'
            });

        }

        if(role === 'librarian'){

            if(secretCode !== 'LIB123'){

                return res.status(400).json({

                    message:'Invalid librarian secret code'

                });

            }

        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({

            username,
            email,
            password:hashedPassword,
            role

        });

        await newUser.save();

        return res.status(201).json({

            message:'User registered successfully'

        });

    }catch(err){

        return res.status(500).json({

            message:'Server error '+err.message

        });

    }

};

exports.loginUser = async(req,res)=>{

    try{

        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(!user){

            return res.status(400).json({
                message:'User not found'
            });

        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){

            return res.status(400).json({
                message:'Invalid email or password'
            });

        }

        const token = jwt.sign(

            {
                id:user._id,
                role:user.role
            },

            "librarysecretkey",

            {
                expiresIn:'1d'
            }

        );

        return res.status(200).json({

            message:'Login successful',
            token

        });

    }catch(err){

        return res.status(500).json({
            message:'Server error '+err.message
        });

    }

};
