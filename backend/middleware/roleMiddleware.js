const roleMiddleware = (req,res,next)=>{

    if(req.user.role !== 'librarian'){

        return res.status(403).json({
            message:'Only librarian can perform this action'
        });

    }

    next();

};

module.exports = roleMiddleware;