$(document).ready(function(){
  
    var $container = $('.container'),
        $main = $('.main'),
        $btn = $('.button'),
        $range = $('input.range'),
        $back = $('.back'),
        $img = $('.img');
  
    $container
        .mouseover(function() {
            $main.removeClass("hide");
            $back.addClass("shadow");
        })
        .mouseout(function() {
            $main.addClass("hide");
            $back.removeClass("shadow");
        });
 
    $img.click(function() {
            $img.removeClass("plus")
            .addClass("tick");
        });

    $range.on('input', onChangeRange);
  
    
});

function onChangeRange(e) {
  var text = $(this).attr('data'),
      value = e.target.value,
      $text = $('.input_data[data="'+text+'"]');
  $text.html('+'+value);
};
