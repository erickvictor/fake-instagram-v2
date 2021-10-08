const { Comment } = require("../models");

const commentController = {
  async createComment(req, res) {
    const { user } = req.session;
    const { description, postId } = req.body;

    try {
      const comment = await Comment.create({
        user_id: user.id,
        publication_id: postId,
        content: description,
        create_at: new Date().toISOString(),
      });
      return res.redirect("/home");
    } catch (error) {
      return res.redirect("/home");
    }
  },
};

module.exports = commentController;
