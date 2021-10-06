const { Publication, User } = require("../models");

const mainController = {
  async showHome(req, res) {
    //busccar as publicações
    const publications = await Publication.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    return res.render("home", { publications }, console.log(publications));
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
