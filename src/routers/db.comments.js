const controller = require("../controllers/db.comments")
const router = require("express").Router()

router.get("/", controller.GET)
router.get("/random", controller.GETRANDOM)
router.get("/:id", controller.GETONE)
router.post("/", controller.POST)
router.put("/:id", controller.PUT)
router.delete("/:id", controller.DELETE)

module.exports = router