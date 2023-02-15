const express = require("express");
const router = express.Router();
const controller = require("../controllers/todoController");

/*Get All*/
router.get("/", controller.getAll);

/*Get*/
router.get("/:id", controller.get);

/*Post*/
router.post("/", controller.add);

/*Put*/
router.put("/:id", controller.update);

/*Delete*/
router.delete("/:id", controller.delete)

module.exports = router;