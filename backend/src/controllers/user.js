const bcrypt = require('bcrypt')


class userController{
    async registration(req,res){

    }

    async login(req,res){

    }

    async check(req,res,next){
        const {id} = req.query;
        if(!id){
            return next(err,)

        }
        res.json(id)
    }

    
}