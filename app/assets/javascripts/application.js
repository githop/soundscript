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
		$('.track_divs').append("<div class='language_box'>English</div><div class='tracks_box' style='width:"+ parseInt($('#totalDuration').text()) * 10 + "em;'>1</div>");

		$('#play').on("click", function(){
		$('#play').replaceWith( "<a href='javascript:ytplayer.pauseVideo()'><div id='pause'></div></a> ");
		$('#pause').on("click", function(){
		$('#pause').replaceWith( "<a href='javascript:ytplayer.playVideo()'><div id='play'></div></a>");
		});
	});
	});

	$('.track_divs').on('dblclick', ".tracks_box", function(event){
	  if (event.target.className == "tracks_box") {
	    $(this).append( buildPostIt(event) );
	  }
	  $('.post-it').draggable({ handle: ".header", containment: "parent" });
	  $('.remove_note').on('click', function(){
	    $(this).parent().parent().remove();
	  });
	});	

 	

});