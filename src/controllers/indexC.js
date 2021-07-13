export const index = (req, res) => {
  return res.render("index", {
    pageTitle: "Index",
  });
};
export const skillsProjects = (req, res) => {
  return res.render("skillsProjects", {
    pageTitle: "SkillsProjects",
  });
};
