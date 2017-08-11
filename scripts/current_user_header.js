$( document ).ready(function() {
    if ($.cookie('current_user') !== undefined) {
        $(".header .wrapper").children().remove();
        var user = JSON.parse($.cookie('current_user'));
        $(".header .wrapper").append("<span class='user_login'>" + user.login + "</span>")
    }
});