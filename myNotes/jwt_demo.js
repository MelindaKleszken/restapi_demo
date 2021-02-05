const jwt = require('jsonwebtoken');

const myFunction = () => {
    const token = jwt.sign({_id: 'abc123'}, "my secret string", {expiresIn: '1 week'});
    console.log(token);

    const data = jwt.verify(token, "my secret string")
    console.log(data);
};

myFunction();