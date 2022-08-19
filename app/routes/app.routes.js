module.exports = (app) => {
    const App = require("../controllers/app.controller.js");
  
    app.post("/create", App.create);
  
    app.get("/get-all", App.findAll);
  
    app.get("/message/:titleId", App.findOne);
  
    app.put("/message/:titleId", App.update);
  
    app.delete("/message/:titleId", App.delete);
  };