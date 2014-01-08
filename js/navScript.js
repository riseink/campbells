// Toggle Expand Collapse 

$('#button').click(function(){
    $('div.filter-expand').toggleClass("hide");
});

// List item active classes 

$('li.list').click(function(){
    $('li.list').removeClass("active");
    $(this).addClass("active");
});

$('li.list1').click(function(){
    $('li.list1').removeClass("active");
    $(this).addClass("active");
});

$('li.list2').click(function(){
    $('li.list2').removeClass("active");
    $(this).addClass("active");
});

$('li.list3').click(function(){
    $('li.list3').removeClass("active");
    $(this).addClass("active");
});



// Reset List Item Classes 

$("#reset").click(function(){
       $("#container").isotope({
           filter: '*'
       });

       $('a').removeClass("selected");
       $('#signature').removeClass("signature-active");
       $('#classic').removeClass("classic-active");
       $('#reserve').removeClass("reserve-active");
       $('div').removeClass("isotope-hidden");
       
       
       
   });




// Side Navigation Active States 


$('#reserve').click(function(){
    $('#signature').removeClass("signature-active");
    $('#classic').removeClass("classic-active");
    
    $(this).addClass("reserve-active");
});

$('#signature').click(function(){
  $('#reserve').removeClass("reserve-active");
  $('#classic').removeClass("classic-active");
  
      $(this).addClass("signature-active");
});

$('#classic').click(function(){
  $('#reserve').removeClass("reserve-active");
  $('#signature').removeClass("signature-active");
      $(this).addClass("classic-active");
});


// Soup Details Overlay 

var init = function() {
  var card = document.getElementById('card');
  
  document.getElementById('flip').addEventListener( 'click', function(){
    card.toggleClassName('flipped');
  }, false);
};

window.addEventListener('DOMContentLoaded', init, false);


$('#soup-item1').click(function(){   
    $('div.soup-info').addClass("hide");
    $('div#soup-info1').toggleClass("hide");
});


$('#soup-item2').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info2').toggleClass("hide");
});

$('#soup-item3').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info3').toggleClass("hide");
});

$('#soup-item4').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info4').toggleClass("hide");
});


$('#soup-item5').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info5').toggleClass("hide");
});

$('#soup-item6').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info6').toggleClass("hide");
});

$('#soup-item7').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info7').toggleClass("hide");
});


$('#soup-item8').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info8').toggleClass("hide");
});

$('#soup-item9').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info9').toggleClass("hide");
});

$('#soup-item10').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info10').toggleClass("hide");
});

$('#soup-item11').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info11').toggleClass("hide");
});

$('#soup-item12').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info12').toggleClass("hide");
});

$('#soup-item13').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info13').toggleClass("hide");
});

$('#soup-item14').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info14').toggleClass("hide");
});

$('#soup-item15').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info15').toggleClass("hide");
});

$('#soup-item16').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info16').toggleClass("hide");
});

$('#soup-item17').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info17').toggleClass("hide");
});

$('#soup-item18').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info18').toggleClass("hide");
});

$('#soup-item19').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info19').toggleClass("hide");
});

$('#soup-item20').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info20').toggleClass("hide");
});

$('#soup-item21').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info21').toggleClass("hide");
});

$('#soup-item22').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info22').toggleClass("hide");
});

$('#soup-item23').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info23').toggleClass("hide");
});

$('#soup-item24').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info24').toggleClass("hide");
});

$('#soup-item25').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info25').toggleClass("hide");
});

$('#soup-item26').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info26').toggleClass("hide");
});

$('#soup-item27').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info27').toggleClass("hide");
});

$('#soup-item28').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info28').toggleClass("hide");
});

$('#soup-item29').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info29').toggleClass("hide");
});

$('#soup-item30').click(function(){
    $('div.soup-info').addClass("hide");
    $('div#soup-info30').toggleClass("hide");
});

// Isotope scripts

$(function(){

  var $container = $('#container'),
      filters = {};

  $container.isotope({
    itemSelector : '.soup',
    sortBy: 'original-order',
    
    masonry: {
      columnWidth: 0

    }
  });

  // filter buttons
  $('.filter a').click(function(){
    var $this = $(this);
    // don't proceed if already selected
    if ( $this.hasClass('selected') ) {
      return;
    }

    var $optionSet = $this.parents('.option-set');
    // change selected class
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');

    // store filter value in object
    // i.e. filters.color = 'red'
    var group = $optionSet.attr('data-filter-group');
    filters[ group ] = $this.attr('data-filter-value');
    // convert object into array
    var isoFilters = [];
    for ( var prop in filters ) {
      isoFilters.push( filters[ prop ] )
    }
    var selector = isoFilters.join('');
    $container.isotope({ filter: selector });

    return false;
  });

});


