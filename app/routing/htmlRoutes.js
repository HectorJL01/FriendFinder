
// Routes:------------------------------------
// Default
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
// Survey route
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });




// // Export HTML routes
// module.exports = function(app) {
// 	// console.log('___ENTER htmlRoutes.js___');


