const controller = require("../controllers/items")
const router = require("express").Router()

router.get("/", controller.GET)
router.get("/:id", controller.GETONE)
router.post("/", controller.POST)
router.put("/:id", controller.PUT)
router.delete("/:id", controller.DELETE)

module.exports = router