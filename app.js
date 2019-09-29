const Express = require("express");
const BodyParser = require("body-parser");
const investmentController = require("./controllers/InvestmentController");

require("./config/db");

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//API ENDPOINTS
app
  .route("/investments")
  .get(investmentController.listAll)
  .post(investmentController.createNew);

app
  .route("/investments/:id")
  .delete(investmentController.delete);

const porta = process.env.PORT || 8080;

app.listen(porta, () => {
    console.log(`Server running at http://localhost:${porta}`);
});
