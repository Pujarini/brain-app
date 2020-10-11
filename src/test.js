const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    if(result===true){
    console.log(result)
    }
    else{
        console.log(err);
    }
});