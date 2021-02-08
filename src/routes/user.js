const {Router} = require('express');
const { getMyProfile, addUser, updateUserById, deleteUser, login, logout} = require("../controllers/user");
const {hashPassword, auth} = require('../middleware');
const userRouter = Router();

//TEST
//ADD USER
// copy token
//get your profile (remember include token in header)


// userRouter.get("/users",  getAllUsers);
userRouter.get("/users/myprofile", auth, getMyProfile);
userRouter.post("/users", hashPassword, addUser);
userRouter.patch("/users/myprofile", auth, hashPassword, updateUserById);
userRouter.delete("/users/myprofile", auth, deleteUser);
userRouter.post("/users/login", auth, login);
userRouter.get("users/logout", auth, logout);

//simpler way
// userRouter.route("/users").get(getAllUsers).post(hashPassword, addUser)
// userRouter.route("/users/:id").patch(hashPassword, updateUserById).delete(deleteUser)
// userRouter.route("/users/login").post(auth, login)


module.exports = {
    userRouter,
};