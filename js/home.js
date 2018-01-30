/* Al cargar la página iniciaremos... */

$(document).ready(function() {

  /* Se guardan los parámetros de data en array para iterar */
  var laboratorian = [{
      key: 'FRIEND2'
    },
    {
      key: 'FRIEND3'
    },
    {
      key: 'FRIEND4'
    },
    {
      key: 'FRIEND5'
    },
  ];

  /* Se indica que los elementos de laboratorian sean recorridos para encontrar el nombre */
  $.each(laboratorian, function findName(i) {
    var keys = Object.keys(data[laboratorian[i].key]);
    laboratorian[i].number = keys.length;
  });

  /*Arreglo con nombre de amigas en tu red (keys de laboratorian)*/
  function nameArray() {
    var who = [];
    $.each(laboratorian, function getKeys(i) {
      who.push(laboratorian[i].key);
    });
    //console.log();
    return who;
  };
  /*Guradamos la función*/
  var keys = nameArray();

  /*El buscador filtrará por el nombre*/
  function findName() {
    var names = [];
    $.each(keys, function laboratorianName(i) {
      var showing = data[keys[i]];
      /*Le pedimos que muestre el resultado iterando en keys*/
      $.each(showing, function find(j) {
        names.push(showing[j].name);
      });
    });
    return names;
  }

  /* Filtraremos qué se muestra*/
  $.each(keys, function laboratorianName(i) {
    var showing = data[keys[i]];
    $.each(showing, function showPic(j) {
      // Template de Modal, jalando la data y estilos css
      var structure = '<div class = "profPic pic-style inline-block" data-name="' + showing[j].wichGeneration + '" data-adress="' + showing[j].adress + '"data-major="' + showing[j].major + '"data-mail="' + showing[j].mail + '"' + ' id="' + showing[j].name + '">' +
        '<div class="relPosition" data-toggle="modal" data-target="#modal"> <img class="pic-style" src=" ' + showing[j].image + '"' + 'id="' + showing[j].name + '"' + '">' +
        ' <div class="mouseOpacity visibility-hidden"><p class="text-center msOver-text" >' + showing[j].name + '</p> </div></div></div>';
      // Añadimos al final del div clase "photo-gallery", la estructura descrita arriba
      $('.photo-gallery').append(structure);
    });
  });

  /*Búsqueda con entrada de texto en input
  con evento en teclado (keyboard -keyup-)*/
  var inputSearch = $('.input-js');
  $(inputSearch).on('keyup', function() {
    var name = $(this).val().toLowerCase();
    $('.profPic').hide();
    $('.profPic').each(function() {
      if ($(this).attr('id').toLowerCase().indexOf(name) !== -1) {
        $(this).show();
      }
    });
  });

  /* Efecto Mouseover (relativo a contenedor) */
  $('.relPosition').on('mouseover', function() {
    /*Remover clase "esconder"*/
    $(this).children().last().removeClass('visibility-hidden');
  });
  /* Segunda aplicación retira estilo al contacto del mouse... (out)*/
  $('.relPosition').on('mouseout', function() {
    $(this).children().last().addClass('visibility-hidden');
  });

  /* Salida de data en modales */
  $('.relPosition').on('click', function() {
    var title = $('.modal-name-title');
    var wichGeneration = $('.place-name-data');
    var adress = $('.adress-data');
    var mail = $('.mail-data');
    var major = $('.major-data');
    var keys = nameArray();

    /* Salida de data en texto dentro de los modales */
    $(title).text($(this).children().first().attr('id')); /* showing[j].name */
    $(wichGeneration).text($(this).parent().data('name'));
    $(adress).text($(this).parent().data('adress'));
    $(major).text($(this).parent().data('major'));
    $(mail).text($(this).parent().data('mail'));
  });


  /***Función para crear un nuevo post***/
  $('#post-btn').on('click',function(e){
    e.preventDefault;
    //guardando los values de los inputs
    var $postTitle = $('#post-title').val().toUpperCase();
    var $postBody = $('#post-body').val();

    //creando los elementos
    var $post = $('<article/>', {
      'class': 'post'
    });
    var $title = $('<h2/>', {
      'class': 'title'
    });
    //var $line = $('<hr/>',{'class':'line'});
    var $row = $('<div/>', {
      'class': 'row'
    });
    var $body = $('<p/>', {
      'class': 'body',
      'class': 'col-sm-10'
    });
    var $btnCol = $('<div/>', {
      'class': 'col-sm-2',
      'class': 'col-md-2'
    });
    var $commentBtn = $('<button/>', {
      'class': 'btn',
      'type': 'submit'
    });

    var $commentContainer = $('<div/>',{
        'class':'comment-container'});

    //dando atributos
    $title.text($postTitle);
    $body.text($postBody);
    $commentBtn.text('Comenta')
    $($commentBtn).addClass('btn-primary');
    $($commentBtn).addClass('btn-comment');

    //Colocando en el HTML
    $($btnCol).append($commentBtn);
    $($row).append($body);
    $($row).append($btnCol);
    $($post).append($title);
    $($post).append($row);
    $($post).append($commentContainer);
    $('#container').prepend($post);

    clear();

    /***Función para crear comentario**/
    $('.btn-comment').on('click',function(){

    // creando elementos
    var $commentForm = $('<form/>');
    var $commentInput = $('<textarea/>',{'class':'comment-input'});
    var $sendCommentBtn = $('<button/>',{'class': 'send-comment-btn'});

    //agregando atributos
    $commentInput.attr({
    		'cols' : '1',
    		'rows' : '3',
        'placeholder':'Comenta algo...'
    	});
    $sendCommentBtn.attr('type','submit');
    $sendCommentBtn.text('Enviar');
    $sendCommentBtn.addClass('btn','btn-primary');

    //colocandolo en el HTML
    $($commentForm).append($commentInput);
    $($commentForm).append($sendCommentBtn);
    $($commentContainer).append($commentForm);
    });

    /***Función para postear el comentario***/
    $('.send-comment-btn').on('click',function(e){
      e.preventDefault;
      var $commentValue = $('.comment-input').val();

      //creando elementos
      var $commentParagraphContainer = $('<div/>',{'class': 'comment-paragraph-container'});
      var $commentParagraph = $('<p/>',{'class': 'comment-paragraph'});

      //agregando atributos
      $commentParagraph.text($commentValue);

      //colocando elementos en HTML
      $($commentParagraphContainer).append($commentParagraph);
      $($commentContainer).append($commentParagraphContainer);
    })

  });


  /***Función para limpiar los inputs***/
  var clear = function() {
    //Limpiando los inputs
    $('#post-title').val('');
    $('#post-body').val('');
  }

});
