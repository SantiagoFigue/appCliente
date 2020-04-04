$(function(){
    $('#Buscar').click(function(){
        var dato = $("#datoBuscar").val(); //Ubicar el cuadro de texto y obtener el atributo valor
        //var dato1 = $("dato1").val();
        //var dato2 = $("dato1").val();
        var tbodytabla = $("#tabla");
        $.ajax({
            url: 'http://localhost:3000/estudiante/mostrarTodos', //la funcion para consular a los estudiantes
            //url: 'http://localhost:3000/estudiante/mostrar/' + dato, para mandarle un parametro de busqueda. 
            data: {},  //data: {'nombre': dato1, 'apell_paterno': dato2}  el primer valor es como los hayamos pedido, el segundo es nuestra vairable en html
            type: 'GET', //Se cambia dependiendo la peticion
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(respuesta){
                for(var i = 0; i < respuesta.response.length; i++){
                    tbodytabla.append('<tr> <td>' + respuesta.response[i].id_est + '</td> <td>' + respuesta.response[i].ap_paterno + 
                    '</td> <td>' + respuesta.response[i].ap_materno + '</td> <td>' + respuesta.response[i].nombre + '</td> <td>' + 
                    respuesta.response[i].curp + '</td> <td>' + respuesta.response[i].fecha_nacimiento + '</td> <td>' + respuesta.response[i].estatus + '</td> <td>'
                    + respuesta.response[i].promedio + '</td> <td>' + respuesta.response[i].esc_procedencia + '</td> <td>'+ respuesta.response[i].municipio + '</td> </tr>'); 
                    //todo se acomda dependiendo de lo que nos pidan. 
                }
            },
            error: function(er){
                console.log(er);
                alert(er);
            }
        });
    });
});

$(function(){
  $('#btnListarAlfabetico').click(function(){
      //var dato = $("#datoBuscar").val(); //Ubicar el cuadro de texto y obtener el atributo valor
      //var dato1 = $("dato1").val();
      //var dato2 = $("dato1").val();
      var tbodytabla = $("#tabla");
      $.ajax({
          url: 'http://localhost:3000/estudiante/listarxNombre', //la funcion para consular a los estudiantes
          //url: 'http://localhost:3000/estudiante/mostrar/' + dato, para mandarle un parametro de busqueda. 
          data: {},  //data: {'nombre': dato1, 'apell_paterno': dato2}  el primer valor es como los hayamos pedido, el segundo es nuestra vairable en html
          type: 'GET', //Se cambia dependiendo la peticion
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          success: function(respuesta){
              for(var i = 0; i < respuesta.response.length; i++){
                tbodytabla.append('<tr> <td>' + respuesta.response[i].id_est + '</td> <td>' + respuesta.response[i].ap_paterno + 
                '</td> <td>' + respuesta.response[i].ap_materno + '</td> <td>' + respuesta.response[i].nombre + '</td> <td>' + 
                respuesta.response[i].curp + '</td> <td>' + respuesta.response[i].fecha_nacimiento + '</td> <td>' + respuesta.response[i].estatus + '</td> <td>'
                + respuesta.response[i].promedio + '</td> <td>' + respuesta.response[i].esc_procedencia + '</td> <td>'+ respuesta.response[i].municipio + '</td> </tr>'); 
                //todo se acomda dependiendo de lo que nos pidan. 
              }
          },
          error: function(er){
              console.log(er);
              alert(er);
          }
      });
  });
});

$(function(){
  $('#btnListarMunicipio').click(function(){
      //var dato = $("#datoBuscar").val(); //Ubicar el cuadro de texto y obtener el atributo valor
      //var dato1 = $("dato1").val();
      //var dato2 = $("dato1").val();
      var tbodytabla = $("#tabla");
      $.ajax({
          url: 'http://localhost:3000/estudiante/listarxDireccion', //la funcion para consular a los estudiantes
          //url: 'http://localhost:3000/estudiante/mostrar/' + dato, para mandarle un parametro de busqueda. 
          data: {},  //data: {'nombre': dato1, 'apell_paterno': dato2}  el primer valor es como los hayamos pedido, el segundo es nuestra vairable en html
          type: 'GET', //Se cambia dependiendo la peticion
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          success: function(respuesta){
              for(var i = 0; i < respuesta.response.length; i++){
                tbodytabla.append('<tr> <td>' + respuesta.response[i].id_est + '</td> <td>' + respuesta.response[i].ap_paterno + 
                '</td> <td>' + respuesta.response[i].ap_materno + '</td> <td>' + respuesta.response[i].nombre + '</td> <td>' + 
                respuesta.response[i].curp + '</td> <td>' + respuesta.response[i].fecha_nacimiento + '</td> <td>' + respuesta.response[i].estatus + '</td> <td>'
                + respuesta.response[i].promedio + '</td> <td>' + respuesta.response[i].esc_procedencia + '</td> <td>'+ respuesta.response[i].municipio + '</td> </tr>'); 
                //todo se acomda dependiendo de lo que nos pidan. 
              }
          },
          error: function(er){
              console.log(er);
              alert(er);
          }
      });
  });
});

$(function(){
  $('#btnListarEscuela').click(function(){
      //var dato = $("#datoBuscar").val(); //Ubicar el cuadro de texto y obtener el atributo valor
      //var dato1 = $("dato1").val();
      //var dato2 = $("dato1").val();
      var tbodytabla = $("#tabla");
      $.ajax({
          url: 'http://localhost:3000/estudiante/listarxEscuela', //la funcion para consular a los estudiantes
          //url: 'http://localhost:3000/estudiante/mostrar/' + dato, para mandarle un parametro de busqueda. 
          data: {},  //data: {'nombre': dato1, 'apell_paterno': dato2}  el primer valor es como los hayamos pedido, el segundo es nuestra vairable en html
          type: 'GET', //Se cambia dependiendo la peticion
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          success: function(respuesta){
              for(var i = 0; i < respuesta.response.length; i++){
                tbodytabla.append('<tr> <td>' + respuesta.response[i].id_est + '</td> <td>' + respuesta.response[i].ap_paterno + 
                '</td> <td>' + respuesta.response[i].ap_materno + '</td> <td>' + respuesta.response[i].nombre + '</td> <td>' + 
                respuesta.response[i].curp + '</td> <td>' + respuesta.response[i].fecha_nacimiento + '</td> <td>' + respuesta.response[i].estatus + '</td> <td>'
                + respuesta.response[i].promedio + '</td> <td>' + respuesta.response[i].esc_procedencia + '</td> <td>'+ respuesta.response[i].municipio + '</td> </tr>'); 
                //todo se acomda dependiendo de lo que nos pidan. 
              }
          },
          error: function(er){
              console.log(er);
              alert(er);
          }
      });
  });
});

$(function(){
  $('#btnListarPromedio').click(function(){
      //var dato = $("#datoBuscar").val(); //Ubicar el cuadro de texto y obtener el atributo valor
      //var dato1 = $("dato1").val();
      //var dato2 = $("dato1").val();
      var tbodytabla = $("#tabla");
      $.ajax({
          url: 'http://localhost:3000/estudiante/listarxPromedio', //la funcion para consular a los estudiantes
          //url: 'http://localhost:3000/estudiante/mostrar/' + dato, para mandarle un parametro de busqueda. 
          data: {},  //data: {'nombre': dato1, 'apell_paterno': dato2}  el primer valor es como los hayamos pedido, el segundo es nuestra vairable en html
          type: 'GET', //Se cambia dependiendo la peticion
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          success: function(respuesta){
              for(var i = 0; i < respuesta.response.length; i++){
                tbodytabla.append('<tr> <td>' + respuesta.response[i].id_est + '</td> <td>' + respuesta.response[i].ap_paterno + 
                '</td> <td>' + respuesta.response[i].ap_materno + '</td> <td>' + respuesta.response[i].nombre + '</td> <td>' + 
                respuesta.response[i].curp + '</td> <td>' + respuesta.response[i].fecha_nacimiento + '</td> <td>' + respuesta.response[i].estatus + '</td> <td>'
                + respuesta.response[i].promedio + '</td> <td>' + respuesta.response[i].esc_procedencia + '</td> <td>'+ respuesta.response[i].municipio + '</td> </tr>'); 
                //todo se acomda dependiendo de lo que nos pidan. 
              }
          },
          error: function(er){
              console.log(er);
              alert(er);
          }
      });
  });
});

$(function() {
    $('#btnEliminar').click(function() {
      var nombre = $('#txtNombre').val();
      var apellidoP = $('#txtApelPat').val();
      var apellidoM = $('#txtApelMat').val();
      $.ajax({
        url:'http://localhost:3000/estudiante/delete',
        data:{
            nombre : nombre,
            ap_Paterno : apellidoP,
            ap_Materno : apellidoM
        },
        type:'PUT',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType:'json',
        success:function(respuesta){
          alert("Alumno eliminado.");
          location.reload();
        },
        error:function(er){
          alert("Alumno no eliminado");
        }
      });
    });
});

$(function() {
  $('#btnAgregar').click(function() {
    var nombre = $('#txtNombre').val();
    var apellidoP = $('#txtape_Paterno').val();
    var apellidoM = $('#txtape_Materno').val();
    var sexo = $('#txtSexo').val();
    var callev = $('#txtCalle').val();
    var numerov = $('#txtNumero').val();
    var municipiov = $('#txtMunicipio').val();
    var coloniav = $('#txtColonia').val();
    var estadov = $('#txtEstado').val();
    var paisv = $('#txtPais').val();
    var cpv = $('#txtCP').val();
    var mailv = $('#txtEmail').val();
    var telv = $('#txtTelefono').val();
    var celv = $('#txtCelular').val();
    var curpv = $('#curp').val();
    var fech = $('#fechaNac').val();
    var estatusv = $('#estatus').val();
    var idcivv = $('#estadoCiv').val();
    var tipSang = $('#txtTipSang').val();
    var nssv = $('#txtNSS').val();
    var alerv = $('#txtAler').val();
    var idaca = $('#datAca').val();
    var idtut = $('#datTut').val();

    $.ajax({
      url:'http://localhost:3000/estudiante/nuevo',
      data:{
        nombre : nombre,
        ap_paterno : apellidoP,
        ap_materno : apellidoM,
        sexo : sexo,
        calle : callev,
        numero : numerov,
        municipio : municipiov,
        colonia : coloniav,
        estado : estadov,
        pais : paisv,
        cp : cpv,
        email : mailv,
        tel : telv,
        celular : celv,
        curp : curpv,
        fecha_nacimiento : fech,
        estatus : estatusv,
        id_civ : idcivv,
        tipo_sangre : tipSang,
        nss : nssv,
        alergias : alerv,
        id_aca : idaca,
        id_tut : idtut,
      },
      type:'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType:'json',
      success:function(respuesta){
        alert("Alumno registrado.");
        location.reload();
      },
      error:function(er){
        alert("Alumno no registrado");
      }
    });
  });
});

$(function() {
  $('#btnEliminar7').click(function() {
    $.ajax({
      url:'http://localhost:3000/estudiante/actualizarEstatus',
      data: {},  //data: {'nombre': dato1, 'apell_paterno': dato2}  el primer valor es como los hayamos pedido, el segundo es nuestra vairable en html
      type: 'PUT', //Se cambia dependiendo la peticion
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success:function(respuesta){
        alert("Alumno eliminado.");
        location.reload();
      },
      error:function(er){
        alert("Alumno no eliminado");
      }
    });
  });
});

$(function(){
  $('#btnMostrarDir').click(function(){
      //var dato = $("#datoBuscar").val(); //Ubicar el cuadro de texto y obtener el atributo valor
      //var dato1 = $("dato1").val();
      //var dato2 = $("dato1").val();
      var tbodytabla = $("#tabla");
      $.ajax({
          url: 'http://localhost:3000/estudiante/mostrarDireccion', //la funcion para consular a los estudiantes
          //url: 'http://localhost:3000/estudiante/mostrar/' + dato, para mandarle un parametro de busqueda. 
          data: {},  //data: {'nombre': dato1, 'apell_paterno': dato2}  el primer valor es como los hayamos pedido, el segundo es nuestra vairable en html
          type: 'GET', //Se cambia dependiendo la peticion
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          success: function(respuesta){
              for(var i = 0; i < respuesta.response.length; i++){
                  tbodytabla.append('<tr> <td>' + respuesta.response[i].id_est + '</td> <td>' + respuesta.response[i].ap_paterno + 
                  '</td> <td>' + respuesta.response[i].ap_materno + '</td> <td>' + respuesta.response[i].nombre + '</td> <td>' + 
                  respuesta.response[i].id_dir + '</td> <td>' + respuesta.response[i].calle + '</td> <td>' + respuesta.response[i].numero + '</td> <td>'
                  + respuesta.response[i].municipio + '</td> <td>' + respuesta.response[i].colonia + '</td> <td>'+ respuesta.response[i].estado + '</td> <td>' + respuesta.response[i].pais 
                  + '</td> <td>' + respuesta.response[i].cp + '</td> </tr>'); 
                  //todo se acomda dependiendo de lo que nos pidan. 
              }
          },
          error: function(er){
              console.log(er);
              alert(er);
          }
      });
  });
});


$(function() {
  $('#btnActualizar').click(function() {
    var idEst = $('#txtIdEstudiante').val();
    var calle = $('#txtCalle').val();
    var numero = $('#txtNumero').val();
    var municipio = $('#txtMunicipio').val();
    var colonia = $('#txtColonia').val();
    var estado = $('#txtEstado').val();
    var pais = $('#txtPais').val();
    var cp = $('#txtCP').val();
    
    $.ajax({
      url:'http://localhost:3000/estudiante/actualizarDireccion',
      data:{
        calle : calle,
        numero : numero,
        municipio : municipio,
        colonia : colonia,
        estado : estado,
        pais : pais,
        cp : cp,
        id_estudiante : idEst,
      },
      type:'PUT',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType:'json',
      success:function(respuesta){
        alert("Direccion del Alumno Actualizada.");
        location.reload();
      },
      error:function(er){
        alert("Direccion del Alumno no Actualizada.");
      }
    });
  });
});