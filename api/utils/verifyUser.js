import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    //const token = req.headers.authorization?.split(" ")[1]; 
   if(!token){
       return next(errorHandler(401, 'Unauthorized'));
       //if (!token) {
       // return res.status(401).json({ error: "Unauthorized: No token provided" });
       //}
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err)
        {
            return next(errorHandler(401, 'Unauthorized'));
           //return res.status(403).json({ error: "Token expired or invalid" });
        }
        req.user = user;
        next();
    });
};