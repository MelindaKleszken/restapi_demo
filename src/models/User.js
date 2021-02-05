const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
//name, email, password
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [
        {token: {type: String}}
    ],
},
    { timestamps:true}
);


userSchema.statics.findByCredentials = async (email, password) => {
    //
    const user = await User.findOne({email});
    if (!user) {
        throw new Error('Unable to login')
    };

    const passwordMatch = await bycrypt.compare(password, user.password)
    if (!passwordMatch) {
        throw new Error('Unable to login')
    };

    return user
};

userSchema.methods.generatesAuthToken = async function() {
    const token = jwt.sign({_id: this._id}, process.env.SECRET, {expiresIn: '1 week'});
    this.tokens.push({token: token});
    return token
};



const User = mongoose.model('User', userSchema);

module.exports = {
    User, userSchema
}