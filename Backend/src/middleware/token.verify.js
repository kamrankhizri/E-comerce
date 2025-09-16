// import jwt from "jsonwebtoken";

// // Token Validator
// export const authenticateToken = (req, res, next) => {
//   // Verify token from headers  
//   const authHeader = req.headers["authorization"];
//   // Sent Error if token header missing
//   if (!authHeader) return res.status(401).json({ message: "Missing Authorization header" });
  
//   // get token from header
//   const token = authHeader.split(" ")[1];
//   // Sent Error if token is missing
//   if (!token) return res.status(401).json({ message: "Malformed Authorization header" });

//   // Verify Token
//   jwt.verify(token, "axyubkam@1234", (err, userPayload) => {
//     // Send Error if token is not valid
//     if (err) return res.status(403).json({ error: "Invalid or expired token" });
    
//     // add user payload to req object
//     req.user = userPayload;
//     next();
//   });
// }

import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, "SECRET_KEY", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user; // { id, email, role }
    next();
  });
};

export const isAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};
