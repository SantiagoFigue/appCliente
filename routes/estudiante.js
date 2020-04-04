var express = require('express');
var router = express.Router();

router.get('/nuevo', function(req,res,next){
    res.render('./estudiantes/agregar',
    {title: "Estudiante Agregar"});
});

router.get('/buscar', function(req,res,next){
    res.render('./estudiantes/buscar',
    {title: "Buscar Estudiante"});
});

router.get('/eliminar', function(req,res,next){
    res.render('./estudiantes/eliminar',
    {title: "Eliminar Estudiante"});
});

router.get('/actualizar', function(req,res,next){
    res.render('./estudiantes/actualizar',
    {title: "Actualizar Estudiante"});
});



module.exports = router;
