import WOW from 'wowjs';
// import progress from 'progress';
// import progress from '../js/progress';
// require('html5shiv');
// import $ from 'jquery';
// import jQuery from 'jquery';

// console.log("index.js");
// console.log("env=" + process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development' ) {
  require('../index.html');
  require('../en/index.html');
}
if(process.env.NODE_ENV === 'production' ) {
  new WOW().init();
}
require('../js/progress');

$(document).ready(function () {

  $('#popup_link').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper').removeClass('hide');
  });
  $('#popup_link100').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper2').removeClass('hide');
  });
  $('#popup_link1000').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper4').removeClass('hide');
  });
  $('#popup_link500').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper3').removeClass('hide');
  });
  $('#popup_link5000').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper5').removeClass('hide');
  });
  $('#popup_link108').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper6').removeClass('hide');
  });
  $('#popup_link5e').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper7').removeClass('hide');
  });
  $('#popup_link10e').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper9').removeClass('hide');
  });
  $('#popup_link50e').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper8').removeClass('hide');
  });
  $('#popup_link100e').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper10').removeClass('hide');
  });
  $('#popup_link108e').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper11').removeClass('hide');
  });
  $('#popup_close').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper').addClass('hide');
    // jwplayer("myElement2").stop();
  });
  $('#popup_close2').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper2').addClass('hide');
  });
  $('#popup_close3').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper3').addClass('hide');
  });
  $('#popup_close4').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper4').addClass('hide');
  });
  $('#popup_close5').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper5').addClass('hide');
  });
  $('#popup_close6').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper6').addClass('hide');
  });
  $('#popup_close7').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper7').addClass('hide');
  });
  $('#popup_close8').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper8').addClass('hide');
  });
  $('#popup_close9').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper9').addClass('hide');
  });
  $('#popup_close10').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper10').addClass('hide');
  });
  $('#popup_close11').click(function (e) {
    e.preventDefault();
    $('#popup_wrapper11').addClass('hide');
  });
});