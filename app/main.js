import BackgroundsController from "./Controllers/BackgroundsController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TempsController from "./Controllers/TempsController.js"
import ToDosController from "./Controllers/ToDosController.js"

class App {
  backgroundsController = new BackgroundsController()
  quotesController = new QuotesController()
  tempsController = new TempsController()
  todosController = new ToDosController()
}

window["app"] = new App();
