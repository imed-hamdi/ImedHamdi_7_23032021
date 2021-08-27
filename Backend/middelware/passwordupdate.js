module.exports = (req, res, next) => {

    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    if (regexPassword.test(req.body.password)) {
        next();
    } else {
        res.status(400).json({
            message: "Le mot de passe doit contenir au moins 5 caracteres entre miniscule"
            + "majuscule chiffres et caracteres speciaux"
        });
    }
    
}