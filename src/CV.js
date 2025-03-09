var myCV = {
    name: "ChatGPT",
    title: "AI Language Model",
    summary: "I generate human-like text and assist with various tasks.",
    skills: ["TypeScript", "JavaScript", "SCSS", "AI Assistance"],
    experience: [
        { company: "OpenAI", role: "AI Assistant", years: 3 },
        { company: "Tech Corp", role: "Chatbot", years: 2 },
    ],
};
document.addEventListener("DOMContentLoaded", function () {
    var app = document.getElementById("app");
    if (app) {
        app.innerHTML = "\n        <div class=\"cv\">\n          <h1>".concat(myCV.name, "</h1>\n          <h2>").concat(myCV.title, "</h2>\n          <p>").concat(myCV.summary, "</p>\n          <h3>Skills</h3>\n          <ul>").concat(myCV.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</ul>\n          <h3>Experience</h3>\n          <ul>\n            ").concat(myCV.experience.map(function (exp) { return "<li>".concat(exp.role, " at ").concat(exp.company, " for ").concat(exp.years, " years</li>"); }).join(""), "\n          </ul>\n        </div>\n      ");
    }
});
