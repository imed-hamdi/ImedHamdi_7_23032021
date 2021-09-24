module.exports = (req, res, next) => {


    const regexText =/^(?=.*[a-zA-Z0-9@$!%*?&é'"(--èè_çà):;,$^ù*!:]){5,}/

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