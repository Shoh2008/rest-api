const express = require("express")
const cors = require("cors")
require("./config")
const app = express()
const path = require("path")

app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/doc.html"))
})

app.use("/objects", require("./routers/objects"))
app.use("/items", require("./routers/items"))
app.use("/products", require("./routers/products"))

app.use("/db.users", require("./routers/db.users"))
app.use("/db.albums", require("./routers/db.albums"))
app.use("/db.comments", require("./routers/db.comments"))
app.use("/db.posts", require("./routers/db.posts"))
app.use("/db.todos", require("./routers/db.todos"))

app.listen(8080, () => console.log("server is ready at 8080"))