const router = require("express").Router();
const { obtenerUsuarios,guardarUsuarios,modificarUsuarios,eliminarUsuarios,enviarEmail }=require('../controllers/usuarios.controller');

router.get("/", (req,res) => res.send('hola mundo'));
router.get('/usuarios',obtenerUsuarios);
router.post('/usuarios',guardarUsuarios);
router.put('/usuarios/:id',modificarUsuarios);
router.delete('/usuarios/:id',eliminarUsuarios);
router.get('/enviaremail',enviarEmail);
module.exports= router;