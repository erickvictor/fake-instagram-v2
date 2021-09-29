const { User } = require("../models");
const bcrypt = require("bcryptjs");

const authController = {
  showLogin(req, res) {
    return res.render("auth/login");
  },
  showRegister(req, res) {
    return res.render("auth/register");
  },

  async register(req, res) {
    const { name, email, password, username } = req.body;
    const passCrypt = bcrypt.hashSync(password, 10);

    try {
      const user = await User.create({
        name,
        email,
        password: passCrypt,
        username,
        avatar: "link",
        create_at: new Date().toISOString(),
      });

      return res.redirect("/login");
    } catch (err) {
      console.log(err);
      return res.redirect("/registro");
    }
  },

  async logon(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.render("auth/login", {error: "Usuario ou senha não existe!"});
      }
      
      if(!bcrypt.compareSync(password, user.password)){
        return res.render("auth/login", { error: "Usuario ou senha não existe!" });
      }

      return res.redirect("/home");
    } catch (err) {
      console.log(err);
      return res.redirect("/login", { error: "Sistema inidisponivel tente novamente!" });
    }
  }
};

module.exports = authController;
