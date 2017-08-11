$(function() {
    $("form.sign_up").validate({
        rules: {
            name: {
                required: true,
                maxlength: 8,
                minlength: 4
            },
            login: {
                required: true,
                maxlength: 8,
                minlength: 4
            },
            mail: {
                required: true,
                email: true
            },
            pd: {
                required: true,
                minlength: 5
            }
        },
        errorPlacement: function(error, element) {},
        submitHandler: function(form) {
            $( "#login_form" ).submit(function( event ) {
                event.preventDefault();

                var paramObj = {};
                $.each($('#login_form').serializeArray(), function(_, kv) {
                    paramObj[kv.name] = kv.value;
                });
                if ($.cookie('users') === undefined) {
                    $.cookie('users',JSON.stringify([]));
                }
                users = JSON.parse($.cookie('users'));
                users.push(paramObj);
                $.cookie('users',JSON.stringify(users));
                window.location.href = "login.html";
            });
        }
    });
});