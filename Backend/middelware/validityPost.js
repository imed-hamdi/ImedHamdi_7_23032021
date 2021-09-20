module.exports = (req, res, next) => {


    const regexText =/^(?=.*[A-Za-z0-9d@"',;:.'(-è__çà)=+&é$!%*#?&])/;

    if (regexText.test(req.body.title)) {
        if (regexText.test(req.body.contained)) {
            next();
        } else {
            res.status(400).json({
                message: "ATTENTION ! il faut bien remplir les champs !."
            });
        }
    } else {
        res.status(400).json({ message: "Erreur" });
    }
}