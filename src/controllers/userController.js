import User from "../models/User";
import fetch from "node-fetch";
import bcrypt from "bcrypt";

export const getJoin = (req, res) =>
  res.render("wetube/users/join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  // 패스워드 확인
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render("wetube/users/join", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  // 유저, 이메일 중복 여부 확인
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("wetube/users/join", {
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
    return res.status(400).render("wetube/users/join", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
export const getLogin = (req, res) =>
  res.render("wetube/users/login", { pageTitle: "Login" });
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username, socialOnly: false });
  // check if account exists
  if (!user) {
    return res.status(400).render("wetube/users/login", {
      pageTitle,
      errorMessage: "An account with this username does not exists.",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  // check if password correct
  if (!ok) {
    return res.status(400).render("wetube/users/login", {
      pageTitle,
      errorMessage: "Wrong password",
    });
  }
  req.flash("info", "Log in success!");
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/wetube");
};

export const startGithubLogin = (req, res) => {
  const baseUrl = `https://github.com/login/oauth/authorize`;
  const config = {
    client_id: process.env.GH_CLIENT,
    allow_signup: false,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};

export const finishGithubLogin = async (req, res) => {
  const baseUrl = `https://github.com/login/oauth/access_token`;
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
  if ("access_token" in tokenRequest) {
    // access api
    const { access_token } = tokenRequest;
    const apiUrl = "https://api.github.com";
    const userData = await (
      await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const userName = await (
      await fetch(`${apiUrl}/user/name`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailData = await (
      await fetch(`${apiUrl}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailObj = emailData.find(
      (email) => email.primary === true && email.verified === true
    );
    if (!emailObj) {
      return res.redirect("/wetube/login");
    }
    let user = await User.findOne({ email: emailObj.email });
    if (!user) {
      user = await User.create({
        name: userData.name ? userData.name : "Unknown",
        avatarUrl: userData.avatar_url,
        username: userData.login,
        email: emailObj.email,
        password: "",
        socialOnly: true,
        location: userData.location,
      });
    }
    req.flash("info", "Log in success!");
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/wetube");
  } else {
    return res.redirect("/wetube/login");
  }
};

export const logout = (req, res) => {
  // req.session.destroy();
  req.session.loggedIn = null;
  req.session.user = null;
  req.flash("info", "Bye Bye");
  return res.redirect("/wetube");
};
export const getEdit = (req, res) => {
  return res.render("wetube/users/edit-profile", {
    pageTitle: "Edit Profile",
  });
};
export const postEdit = async (req, res) => {
  // const id = req.session.user.id
  // const { name, email, username, location } = req.body;
  const {
    session: {
      user: { _id, email: sessionEmail, username: sessionUsername, avatarUrl },
    },
    body: { name, email, username, location },
    file,
  } = req;
  let sessionParam = [];
  if (sessionEmail !== email) sessionParam.push({ email });
  if (sessionUsername !== username) sessionParam.push({ username });

  if (sessionParam.length > 0) {
    const foundUser = await User.findOne({ $or: sessionParam });
    if (foundUser && foundUser._id.toStraing() !== _id) {
      return res.status(400).render("wetube/users/edit-profile", {
        pageTitle: "Edit Profile",
        errorMessage: "This email/username is already taken.",
      });
    }
  }
  const updatedUser = await User.findByIdAndUpdate(
    _id,
    {
      avatarUrl: file ? file.path : avatarUrl,
      name,
      email,
      username,
      location,
    },
    { new: true }
  );
  req.session.user = updatedUser;
  return res.redirect("/wetube/users/edit");
};

export const getChangePassword = (req, res) => {
  // 쇼셜 로그인 경우
  if (req.session.user.socialOnly == true) {
    req.flash("error", "Can't change password.");
    return res.redirect("/wetube");
  }
  return res.render("wetube/users/change-password", {
    pageTitle: "Change Password",
  });
};
export const postChangePassword = async (req, res) => {
  const {
    session: {
      user: { _id, password },
    },
    body: { oldPassword, newPassword, newPasswordConfirmation },
  } = req;
  // 현pw 일치여부 체크
  const ok = await bcrypt.compare(oldPassword, password);
  if (!ok) {
    return res.status(400).render("wetube/users/change-password", {
      pageTitle: "Change Password",
      errorMessage: "The current password is incorrect",
    });
  }
  // 바꿀려는 pw 체크
  if (newPassword !== newPasswordConfirmation) {
    return res.status(400).render("wetube/users/change-password", {
      pageTitle: "Change Password",
      errorMessage: "The password does not match the confirmation",
    });
  }
  // db에 저장
  const user = await User.findById(_id);
  user.password = newPassword;
  await user.save();
  req.flash("info", "Password updated");
  // session 저장
  req.session.user.password = user.password;
  // send notification
  return res.redirect("/wetube/users/logout");
};

export const see = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate({
    path: "videos",
    // double populate
    populate: {
      path: "owner",
      model: "User",
    },
  });
  if (!user) {
    return res
      .status(404)
      .render("wetube/404", { pageTitle: "User not found." });
  }
  return res.render("wetube/users/profile", {
    pageTitle: user.name,
    user,
  });
};
