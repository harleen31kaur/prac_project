// //jwt auth middleware - token generation(jwt.ign)     token validation(jwt.verify)

// const jwt=require('jsonwebtoken');
// const createToken=jwt.sign(payload, process.env,PRIVATE_KEY,(err,token)=>{
//     if(err){
//         console.log("INVALID",err.message);
//     }
//     else{
//         console.log(token);
//     }
// });
// const validateToken=jwt.verify(token,process.env,PRIVATE_KEY);

// //verify a token symmetric 
// jwt.verify(token, process.env,PRIVATE_KEY, function(err,decoded){
//     console.log(decoded.foo);
// });

// //invalid tken- synchronous 
// try{
//     var decoded=jwt.verify(token, 'wrong-secret');
//     console.log("Decoded:", decoded);
// } 
// catch(err){
//     console.error("Invalid token:", err.message);
// }


// // invalid token
// jwt.verify(token, 'wrong-secret', function(err, decoded) {
//     // err
//     // decoded undefined
//   });










// var jwt=require('jsonwebtoken');
// const generateToken=(userData)=>{
//   //in this fuc we are creating new jwt token to provide user,for login session management or authorization purpose
//   return jwt.sign(userData,process.env.PRIVATE_KEY)
// }
// const validateJwtToken=(req,res,next)=>{
//   //first we are checking that jwt token is available or not
//   const authorization=req.headers.authorization;//token fetch kara hai
//   //output 1: Bearer dhsiuguerueb
//   //output 2: gfuehfoerherc
//   //output 3:
//   //output 4: TOKEN bana hi nhi hai local ho ya end point testing se bheja ho, without token header send kra hai

//   if(!authorization){
//      return res.status(401).json({err:'Token not available'});
//   }
// //we are storing the token value from headers and splitting to get Bearer xyzabc.kjh to xyzabc.kjh  
//   const token=req.headers.authorization.split(' ')[1]   //bearer aur steing alag alag ho jayenge


//   //token aaya but unauthorized hai (if token provided is wrong)
//   if(!token){
//     return res.status(401).json({err:'Unauthorized user'});
//   }

//   try{
//     //if token is validated or verified then movce to next middleware or respond back to client
//       const validateToken=jwt.verify(token,process.env.PRIVATE_KEY);
//       req.user=validateToken;
//       next();
  
//   }
//   catch(err){
//     console.error("Error occured",err.message);
//   }
// }

// modules.exports= {generateToken,validateToken};






const jwt = require('jsonwebtoken');

const generateToken = (userData) => {
    return jwt.sign(userData, process.env.PRIVATE_KEY);
};

const jwtAuthMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({ err: 'Token not available' });
    }

    const token = authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ err: 'Unauthorized User' });
    }

    try {
        const validateToken = jwt.verify(token, process.env.PRIVATE_KEY);
        req.user = validateToken;
        next();
    } catch (err) {
        console.error("Error occurred: ", err.message);
        return res.status(403).json({ err: 'Invalid token' });
    }
};

module.exports = { jwtAuthMiddleware, generateToken };