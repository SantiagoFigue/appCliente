var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/nuevo', function(req,res,next){
  res.render('./estudiantes/buscar',
  {title: "Estudiante Agregar"});
});

module.exports = router;
