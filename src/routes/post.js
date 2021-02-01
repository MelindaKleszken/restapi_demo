const {Router} = require('express');
const {listAllPosts, listUserPosts, addNewPost, updatePost, deletePost } = require("../controllers/post")
const postRouter = Router();

//post PART
postRouter.get("/posts", listAllPosts);
  
postRouter.get("/posts/:user_id", listUserPosts);

postRouter.post("/posts/:user_id", addNewPost);

postRouter.patch("/posts/:id", updatePost);

postRouter.delete("/posts/:id", deletePost);

 module.exports = {
    postRouter,
}
