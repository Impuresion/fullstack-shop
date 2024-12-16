const ApiError = require('../error/ApiError');

class UserController {
    async registration(req, res) {

    }
    async login(req, res) {

    }
    async check(req, res, next) {
        const {id} = req.query;
        if(!id){
            return next(ApiError.badRequest("No ID found"));
        }
        res.json(id)
    }
}

module.exports = new UserController();