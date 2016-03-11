/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {  
  //user login information
  //logout and app button
  var cnName = $("div#logUser span#cnname").text();
  if(cnName == null || cnName == "") {
    $("div#logUser div#userMenu").append(
      "<span class='label label-default full-width'>Not logged in</span>"
    );
  } else {
    $("div#logUser div#userMenu").append(
      "<button class='btn btn-sm' style='cursor: not-allowed'>Welcome, " + cnName + "</button>" +
      "<button data-toggle='dropdown' class='btn btn-sm dropdown-toggle'><span class='caret'></span></button>" +
      "<ul class='dropdown-menu pull-right'>" +
        "<li id='idLogout'><a href='#'><i class='glyphicon glyphicon-off'>&nbsp;</i>Logout</a></li>" +
        "<li><a href='../../apps/main/home'><i class='glyphicon glyphicon-home'>&nbsp;</i>Home</a></li>"+
      "</ul>"
    );
    //show dropdown menu
    $(".dropdown-toggle").dropdown();
    //click on logout menu
    $("#idLogout").on("click", function() {
      $("#mdl-logout").modal("show");
    });
    //click on yes button of logout
    $("#mdl-logout .modal-footer button#btn-yes").click(function(){
      window.location.replace("../../apps/auth/logout");
    });
  }
});