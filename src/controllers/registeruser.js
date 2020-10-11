const handleRegister=(req, res,db,bcrypt) => {
    const { email, name, password } = req.body;
    if(!email || !name || !password){
        return res.status(400).json('Sorry! You are not eligible to register');
    }
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    console.log(password);
    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        })
            .into('login')
            .returning('email')
            .then(loginEmail => {
                return trx('users').
                    returning('*').
                    insert({
                        email: loginEmail[0],
                        name: name,
                        joined: new Date()
                    }).then(user => {
                        console.log(user[0], 'registered')
                        res.json(user[0])
                    })
            })
            .then(trx.commit)
            .catch(trx.rollback)
    })
        .catch(err => res.status(400).json('Unable to Register'))
}

module.exports={
    handleRegister:handleRegister
}