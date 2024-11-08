const jwt = require('jsonwebtoken');
const User = require('../Modals/user');


const auth = async (req, res, next) =>{
    
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({ error: 'No token, authorization denied' });
    }else{
        try{
            const decode = jwt.verify(token, "AJIT"); //AJIT IS SECRET KEY
            req.user = await User.findById(decode.userId).select('-password');
            next();
        }catch(err){
            res.status(401).json({ error: 'Token is not valid' });
        }
    }
}

module.exports = auth;