function renderShoe(arrayShoe) {
    var content = '';

    arrayShoe.forEach(function (dataShoe) {
        content += `
        <div class="col-4 mt-5">
            <div class="product-feature-content card">
                <div class="product-feature-body card-body">
                    <img class="img-fluid" src="${dataShoe.image}" alt="">
                    <h4 style="height: 60px" class="card-title font-weight-lighter text-left">${dataShoe.name}</h4>
                    <p style="height: 73px" class="card-text font-weight-lighter text-left">${dataShoe.shortDescription}</p>
                </div>
                <div class="product-feature-footer card-footer text-muted d-flex justify-content-between align-items-center">
                    <a class="orange-button-2 text-decoration-none" href="../detail.html?id=${dataShoe.id}">Buy now</a>
                    <span class="d-block m-auto">${dataShoe.price}$</span>
                </div>
            </div>
        </div>
        `
    })

    document.getElementById('tableShoe').innerHTML = content;
    
};

function getProductApi() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET'
    })

    promise.then(function (res) {

        renderShoe(res.data.content)

    })

    promise.catch(function (error) {
        console.log(error);
    })
};

getProductApi()

var validation = new Validation();  

document.querySelector('#btnSubmit').addEventListener('click', function () {
    var email = document.querySelector('#txtEmail').value;
    var password = document.querySelector('#txtPassword').value;
    var cfmPassword = document.querySelector('#txtCfmPassword').value;
    var name = document.querySelector('#txtName').value;
    var phone = document.querySelector('#txtPhone').value;
    var gender = document.querySelector('#txtGender').checked;
    
    var isValid = true;
    
    isValid &= validation.checkEmpty(
        email,
        'errorEmail',
        'Xin vui lòng nhập email'
    ) && validation.checkEmailFormat(
        email,
        'errorEmail',
        'Xin vui lòng nhập đúng định dạng email'
    )

    isValid &= validation.checkEmpty(
        password,
        'errorPass',
        'Xin vui lòng nhập mật khẩu'
    ) && validation.checkPass(
        password,
        'errorPass',
        'Mật khẩu phải bao gồm một chữ cái viết hoa, một ký tự đặc biệt và ký tự chữ và số'
    ) && validation.checkCharacterLength(
        password,
        'errorPass',
        'Xin vui lòng nhập từ 5 - 8 kí tự',
        5,
        8
    )

    isValid &= validation.checkEmpty(
        cfmPassword,
        'errorPassCfm',
        'Xin vui lòng xác nhận mật khẩu'
    ) && validation.checkPass(
        cfmPassword,
        'errorPassCfm',
        'Mật khẩu phải bao gồm một chữ cái viết hoa, một ký tự đặc biệt và ký tự chữ và số'
    )   && validation.checkCharacterLength(
        cfmPassword,
        'errorPassCfm',
        'Xin vui lòng nhập từ 5 - 8 kí tự',
        5,
        8
    )

    isValid &= validation.checkEmpty(
        name,
        'errorName',
        'Xin vui lòng nhập tên'
    ) && validation.checkCharacterLength(
        name,
        'errorName',
        'Xin vui lòng nhập từ 5 - 8 kí tự',
        5,
        8
    )

    isValid &= validation.checkEmpty(
        phone,
        'errorPhone',
        'Xin vui lòng nhập số điện thoại'
    )

    if(isValid) {
        var reg = new Register();
        
        reg.email = document.querySelector('#txtEmail').value;
        reg.password = document.querySelector('#txtPassword').value;
        reg.name = document.querySelector('#txtName').value;
        reg.gender = document.querySelector('#txtGender').checked;
        reg.phone = document.querySelector('#txtPhone').value; 
        
            var promise = axios({
                url: 'https://shop.cyberlearn.vn/api/Users/signup',
                method: 'POST',
                data: reg,
            });
        
            promise.then(function (res) {
                console.log(res.data);
                alert('Đăng ký tài khoản thành công');
        
            })
        
            promise.catch(function (error) {
                console.log(error.response?.data);
            })

        }
})

