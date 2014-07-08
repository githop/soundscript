// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready( function(){

  $('#form_nav').hide();

  $('#browse').on("click", function(){
    event.preventDefault();
    $('#form_nav').show();
    $('#browse').hide();
  });

  $('.appendTrack').on("click",function(){
    appendNewTrack();
  });

  $('.track_divs').on("click", ".timeButton", function(){
    var postIts = [];  
    var url = '/videos/' + $('.video_id').attr('id') + '/tracks'
 
    $(this).parent().children('.post-it').each(function(){
      postIts.push({ content: $(this).children(".content").text(), position_css: this.style['cssText']})
    });

    $.post(url, { data: postIts }, function( response ) {});
    location.reload();
  });



  $('.track_divs').on("click", ".editButton", function(){
   

    $.post(url, { data: postIts }, function( response ) {});
    location.reload();
  });



  $('.track_divs').on("click", ".deleteButton", function(){
    

    $.post(url, { data: postIts }, function( response ) {});
    location.reload();
  });


  $('.track_divs').on('dblclick', ".tracks_box", function(event){
    if (event.target.className == "tracks_box") {
      new PostIt(event).buildPostIt($(this));
    }
  }); 
});
