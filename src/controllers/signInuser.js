const handleSignIn=(req, res,db,bcrypt) => {
    const { email,password } = req.body;
    console.log(email);
    console.log(password);
    if(!email || !password){
        return res.status(400).json('Sorry! You are not eligible to sign in')
    }
    db.select('email', 'hash').from('login')
        .where('email', '=', req.body.email)
        .then(data => {
            console.log(data[0]);
           const isValid= bcrypt.compareSync(req.body.password, data[0].hash)
           console.log(isValid);
           if(isValid){
            return db.select('*').from('users')
            .where('email', '=', req.body.email)
            .then(user => {
                console.log(user[0])
                res.json(user[0]);
            })
            .catch(err => {
                res.status(400).json('User not found')
            })
           }else{
            res.status(400).json('wrong credentials');
           }
        })
        .catch(err => {
            res.status(401).json('Wrong credentials')
        })
    }
    module.exports={
        handleSignIn:handleSignIn
    }