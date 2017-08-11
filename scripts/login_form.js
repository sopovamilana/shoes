$( document ).ready(function() {
    $( "#login_form" ).submit(function( event ) {
        event.preventDefault();

        var redirect_url = undefined;
        var paramObj = {};
        $.each($('#login_form').serializeArray(), function(_, kv) {
            paramObj[kv.name] = kv.value;
        });

        if ($.cookie('users') !== undefined) {
            users = JSON.parse($.cookie('users'));

            $.each(users, function(_, user) {
                if (user.login == paramObj.login && user.pd == paramObj.pd) {
                    $.cookie('current_user',JSON.stringify({login: user.login}));
                    redirect_url = "shoes.html"
                }
            });
        }

        if (redirect_url !== undefined ) {
            window.location.href = redirect_url;
        } else {
            alert('Incorrect username or password.');
        }
    });
});