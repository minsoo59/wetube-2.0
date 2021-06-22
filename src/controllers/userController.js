import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) =>
  res.render("wetubeJoin", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  // 패스워드 확인
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render("wetubeJoin", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  // 유저, 이메일 중복 여부 확인
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("wetubeJoin", {
      pageTitle,
      errorMessage: "This username/email is already taken.",
    });
  }
  try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect("/wetube/login");
  } catch (error) {
    return res.status(400).render("wetubeJoin", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
export const getLogin = (req, res) =>
  res.render("wetubeLogin", { pageTitle: "Login" });
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username });
  // check if account exists
  if (!user) {
    return res.status(400).render("wetubeLogin", {
      pageTitle,
      errorMessage: "An account with this username does not exists.",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  // check if password correct
  if (!ok) {
    return res.status(400).render("wetubeLogin", {
      pageTitle,
      errorMessage: "Wrong password",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/wetube");
};
export const edit = (req, res) => res.send("Edit User!");
export const remove = (req, res) => res.send("Remove User!");
export const logout = (req, res) => res.send("Logout!");
export const see = (req, res) => res.send("see User!");
