module.exports = (app) => {
    const App = require("../controllers/app.controller.js");
  
    app.post("/create", App.create);
  
    app.get("/get-all", App.findAll);
  
    app.get("/slug/:titleId", App.findOne);
  
    app.put("/slug/:titleId", App.update);
  
    app.delete("/slug/:titleId", App.delete);
};