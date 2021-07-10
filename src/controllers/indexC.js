export const index = (req, res) => {
  return res.render("index", {
    pageTitle: "Index",
  });
};
export const introduce = (req, res) => {
  return res.render("introduce", {
    pageTitle: "Introduce",
  });
};
export const skillsCoding = (req, res) => {
  return res.render("skillsCoding", {
    pageTitle: "SkillsCoding",
  });
};
export const skillsProjects = (req, res) => {
  return res.render("skillsProjects", {
    pageTitle: "SkillsProjects",
  });
};
