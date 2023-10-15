const Post = require("../models/Post");
const moment = require('moment')

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      posts.forEach(post => {
        post.formattedDate = moment(post.createdAt).format('MM/DD/YYYY');
    });
      res.render("feed.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      post.formattedDate = moment(post.createdAt).format('MM/DD/YYYY');
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    //getting error here. This is where I added console.log(req.body)
    console.log(req.body)
    try {
      await Post.create({
        negativeThought: req.body.negativeThought,
        distortion: req.body.distortion,
        challenge: req.body.challenge,
        rationalThought: req.body.rationalThought,
        user: req.user.id,
      })
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(req.body)
      console.log(err);
    }
  },
  favoritePost: async(req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: { bookmark: !post.bookmark },
        }
      );
      console.log("bookmark toggled");
      res.redirect(`/feed`);
    } catch (err) {
      console.log(err);
    }
  },
  // likePost: async (req, res) => {
  //   try {
  //     await Post.findOneAndUpdate(
  //       { _id: req.params.id },
  //       {
  //         $inc: { likes: 1 },
  //       }
  //     );
  //     console.log("Likes +1");
  //     res.redirect(`/post/${req.params.id}`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/feed");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
