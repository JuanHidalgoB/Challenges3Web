const { Router } = require("express");
const router = Router();
const { validarJWT } = require("../middlewares/validar-token");
const {listarTask,crearTask, actualizarTask, eliminarTask} = require('../controllers/Task.js')

/* router.use(validarJWT) */

router.get('/',listarTask)
router.post('/crear',crearTask)
router.put('/:id',actualizarTask)
router.delete('/:id',eliminarTask)

module.exports = router;