const jwt = require('jsonwebtoken');
const config = require('../config/env.json');

module.exports = async function(req, res, next){
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ msg: "autenticar" });
    }

    const [tipo, token] = authorization.split(' ');

    if(!token) {
        return res.status(401).json({erro: "Token pendente"});
    }

    const valido = await jwt.verify(token, config.segredo);

    console.log(valido);

    next();
}