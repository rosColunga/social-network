$(document).ready(function() {

  /***Función para crear un nuevo post***/
  var post = function(e){
  e.preventDefault;
  //guardando los values de los inputs
   var $postTitle = $('#post-title').val().toUpperCase(        );
   var $postBody = $('#post-body').val();

   //creando los elementos
   var $post = $('<article/>',{'class':'post'});
   var $title = $('<h2/>',{'class':'title'});
   //var $line = $('<hr/>',{'class':'line'});
   var $row = $('<div/>',{'class':'row'});
   var $body = $('<p/>', {'class':'body','class':'col-sm-10'});
   var $btnCol = $('<div/>',{'class':'col-sm-2', 'class':'col-md-2'});
   var $commentBtn = $('<button/>',{'class':'btn','class':'btn-primary','type':'submit'})

  //dando atributos
   $title.text($postTitle);
   $body.text($postBody);
   $commentBtn.text('More...')

  //Colocando en el HTML
  $($btnCol).append($commentBtn);
  $($row).append($body);
  $($row).append($btnCol);
  $($post).append($title);
  $($post).append($row);
  $('#container').prepend($post);

  clear();
  }
  $('#post-btn').click(post);


  /***Función para limpiar los inputs***/
  var clear = function(){
    //Limpiando los inputs
     $('#post-title').val('');
     $('#post-body').val('');
  }

});
