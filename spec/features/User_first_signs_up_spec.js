var request = require("request");
var Browser = require("zombie");
var helloWorld = require("../../app.js");
var url = "http://localhost:8888/";
var browser = new Browser();

describe("Login", function() {

  it("returns status code 200", function(next) {
    request.get(url, function(error, response, body) {
      expect(response.statusCode).toBe(200);
      next();
    });
  });

  it("should visit the site and see the login form", function(next) {
    browser.visit(url, function(err) {
      expect(browser.success).toBe(true);
      expect(browser.query("input[value='Login']")).toBeDefined();
      next();
    });
  });

  it("should authenticate the user with spotify", function(next) {
    expect(browser.query("input[value='Login']")).toBeDefined();
    browser.pressButton('Log in with Spotify', function() {
      expect(browser.html("body")).toContain("Connect <strong>Music Safari</strong> to your Spotify account.");
      next();
    });
  });
});
