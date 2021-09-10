const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; //extraire le token du header Authorization de la requête entrante
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); //verify pour décoder le token
    const userId = decodedToken.userId; // extraire l'ID utilisateur de notre token
    if (req.body.id !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
       
      message :"Invalid request"
    });
  }
};
