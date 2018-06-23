// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree
//= require 'icheck'

$(document).ready(function() {
	$(document).on('click', '.add_task', function(event) {
		event.preventDefault();
		$('.form-box').fadeIn();
	});
	$(document).on('click', '#button_ok', function(event) {
		event.preventDefault();
		$('#form_main').submit();
	});
	$(document).on('click', '#button_cancel', function(event) {
		event.preventDefault();
		$('.form-box').hide('slow/400/fast', function() {
			
		});
	});

	$('.check_test').on('ifUnchecked', function(event) {
		$(this).parent().parent('form').submit();
	});

	$('.check_test').on('ifChecked', function(event) {
		$(this).parent().parent('form').submit();
	});

	function icheck(){
	  if($(".icheck-me").length > 0){
	    $(".icheck-me").each(function(){
	      var $el = $(this);
	      var skin = ($el.attr('data-skin') !== undefined) ? "_" + $el.attr('data-skin') : "",
	      color = ($el.attr('data-color') !== undefined) ? "-" + $el.attr('data-color') : "";
	      var opt = {
	        checkboxClass: 'icheckbox' + skin + color,
	        radioClass: 'iradio' + skin + color,
	      }
	      $el.iCheck(opt);
	    });
	  }
	}

	$(function(){
	  icheck();
	});
});