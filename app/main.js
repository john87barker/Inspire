import BackgroundsController from "./Controllers/BackgroundsController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TempsController from "./Controllers/TempsController.js"
import ToDosController from "./Controllers/ToDosController.js"
import ClockController from "./Controllers/ClockController.js"

class App {
  backgroundsController = new BackgroundsController()
  quotesController = new QuotesController()
  tempsController = new TempsController()
  todosController = new ToDosController()
  clockController = new ClockController()
}

window["app"] = new App();
