const {User} = require('../models/User');

// exports.getAllUsers = async (req,res) => {
//     try {
//         const allUsers = await User.find({});
//         res.status(200).send(allUsers);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };

exports.getMyProfile = async (req, res) => {
    res.status(200).send(req.user)
}

exports.addUser = async (req, res) => {
    try {
     const user = new User(req.body);
     const token = await user.generateAuthToken();
     const savedUser = await user.save();

     res.status(201).send({savedUser, token});
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).send({message: 'User already exists'});
        } else {
            res.status(500).send({message: 'Could not connect'});
        }
    }
};

exports.updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(user)
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send({message: 'User not found'});
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send({message: 'User not found'});
    }
};


//login controller created
exports.login = async (req, res) => {
    try {
        const user = await User.findByCredentials(req,body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.status(200).send({user, token});
    } catch (error) {
        res.status(400).send({message: 'Unable to login'});
    }
};


