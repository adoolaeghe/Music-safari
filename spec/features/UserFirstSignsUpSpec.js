var Browser = require("zombie");
var url = "http://work.krasimirtsonev.com/git/blog-posts/TestingWithZombieJS/site/";
var browser = new Browser();

describe("Login", function() {
  it("should visit the site and see the login form", function(next) {
      browser.visit(url, function(err) {
          expect(browser.success).toBe(true);
          expect(browser.query("input[value='Login']")).toBeDefined();
          next();
      });
  });
  it("should authenticate the user with spotify ", function(next) {
      browser.fill('input[name="username"]', "musicsafari@outlook.com")
      browser.fill('input[name="password"]', "Teamb0tjul17")
      browser.pressButton('input[value="Login"]', function() {
      expect(browser.html("body")).toContain("-----");});
  });
});
