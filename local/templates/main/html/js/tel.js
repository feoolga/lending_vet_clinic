$(".ajax").parents("form").each(function(){
    if( $(this).find("input[name=phone]").length ){
        $(this).submit(function (e) {
            var phoneInput = $(this).find("input[name=phone]"),
                phoneValue = phoneInput.val(),
                phoneFirstDigit = parseInt(phoneValue.substr(4, 1));
            if (phoneValue.length > 4 && phoneFirstDigit !== 9) {
                alert("Номер телефона указан не верно, вторая цифра должна быть 9");
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                return false;
            }
        });
    }
});