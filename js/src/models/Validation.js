function Validation() {
    // phương thức kiễm tra rỗng
    this.checkEmpty = function (value, divError, mess) {
        if (value == '') {
            document.getElementById(divError).innerHTML = mess;
            document.getElementById(divError).style.display = 'block';
            return false;
        };
        document.getElementById(divError).innerHTML = '';
        document.getElementById(divError).style.display = 'none';
        return true;
    };

    // phương thức kiểm tra độ dài kí tự
    this.checkCharacterLength = function (value, divError, mess, min, max) {
        if (value.length >= min && value.length <= max) {
            document.getElementById(divError).innerHTML = '';
            document.getElementById(divError).style.display = 'none';
            return true;
        };
        document.getElementById(divError).innerHTML = mess;
        document.getElementById(divError).style.display = 'block';
        return false;
    };

    // phương thức kiểm tra chuỗi kí tự
    this.checkStringCharacter = function (value, divError, mess) {
        var letter =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"

        if (value.match(letter)) {
            document.getElementById(divError).innerHTML = '';
            document.getElementById(divError).style.display = 'none';
            return true;
        };
        document.getElementById(divError).innerHTML = mess;
        document.getElementById(divError).style.display = 'block';
        return false;
    };

    // phương thức kiểm tra định dạng email

    this.checkEmailFormat = function (value, divError, mess) {
        var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (value.match(format)) {
            document.getElementById(divError).innerHTML = '';
            document.getElementById(divError).style.display = 'none';
            return true;
        };
        document.getElementById(divError).innerHTML = mess;
        document.getElementById(divError).style.display = 'block';
        return false;
    };

    // phương thức kiểm tra mật khẩu
    this.checkPass = function (value, divError, mess) {
        var passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;

        if (value.match(passFormat)) {
            document.getElementById(divError).innerHTML = '';
            document.getElementById(divError).style.display = 'none';
            return true;
        };
        document.getElementById(divError).innerHTML = mess;
        document.getElementById(divError).style.display = 'block';
        return false;
    };
}