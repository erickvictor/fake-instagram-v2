const { Publication } = require("../models");

const mainController = {
  showHome(req, res) {
    return res.render("home");
  },
  showCreatePublication(req, res) {
    return res.render("post");
  },
  async createPublication(req, res) {
    const { user } = req.session;
    try {
      const post = await Publication.create({
        image: req.file.filename,
        content: "#Post",
        user_id: user.id,
        create_at: new Date().toISOString(),
      });

      return res.redirect("/home");
    } catch (err) {
      console.log(err);
      return res.render("post", {
        error: "Error ao tentar cadastrar a publicação",
      });
    }
  },
};

module.exports = mainController;
