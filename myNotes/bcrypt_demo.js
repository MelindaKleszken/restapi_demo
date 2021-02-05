const bcrypt = require('bcryptjs');

const myFunction = async () => {
    const password = "any string";
    const hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);


    //compare method to check if password and hashed match, will result true/false
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    console.log(passwordsMatch);
};

myFunction();