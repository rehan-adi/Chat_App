import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const protect = async (req, res, next) => {
    
    let token;

    if
    (req.headers.authorization && req.headers.authorization.startswith('Bearer '))
    {
       try {
        token = req.headers.authorization.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await userModel.findById(decoded.id).select("-password");

        next();
        
       } catch (error) {
         res.status(401);
         throw new error('Not authorized Token field');
       }
    }
    if(!token) {
        res.status(401);
        throw new error('Not authorized, no Token');
    }

}

export default protect;
