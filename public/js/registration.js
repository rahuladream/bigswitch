$('document').ready(function()
{
    /* validation */
    $("#register-form").validate({
        rules:
        {
            name: {
                required: true,
                minlength: 3
            },
            designation: {
                required: true,
            },
            company: {
                required: true,
                minlength: 3
            },
            address: {
                required: true,
                minlength: 5
            },
            phone: {
                required: true,
                maxlength: 12
            },
            city: {
                required: true
            },
            pin: {
                required: true,
                minlength: 6
            },
            email: {
                required: true,
                email: true
            },
        },
        messages:
        {
            name: "Enter a Valid Name",
            company:{
                required: "Provide a company name",
                minlength: "Company must need to be atleast 3 words"
            },
            email: "Enter a Valid Email",
            phone:{
                required: "Please enter phone number",
                maxlength: "Phone number must not exceed 10"
            }
        },
        submitHandler: submitForm
    });
    /* validation */

    /* form submit */
    function submitForm()
    {
        var data = $("#register-form").serialize();
        var connection  = 'bigswitch/index';
        $.ajax({

            type : 'POST',
            url  : connection,
            data : data,
            beforeSend: function()
            {
                $("#error").fadeOut();
                $("#btn-submit").html('<span class="glyphicon glyphicon-transfer"></span> &nbsp; sending ...');
            },
            success :  function(data)
            {
                if(data=="registered")
                {  }
                else{
                    $("#error").fadeIn(1000, function(){

                        $("#error").html(' <div class="thankyoubg-div"> <h4> '+data+' </h4></div>');
                        setTimeout('$(".fadeOut").fadeOut(100, function(){ $(".fadeOut").load("./thankyou.html"); }); ',100);
                        $("#btn-submit").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Submit');
                        document.getElementById("register-form").reset();
                    });

                }
            }
        });
        return false;
    }
    /* form submit */
});