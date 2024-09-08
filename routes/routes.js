const { Router } = require("express");
const { get, saveUser } = require("../controllers/controllers");

const router = Router();

router.get("/", get);

router.post("/save-user", saveUser);

module.exports = router;
