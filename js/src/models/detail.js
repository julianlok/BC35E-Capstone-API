function getEle(id) {
    return document.getElementById(id);
};

function getProductApiDetail() {
    // lay du lieu tham so param tu URL ben trinh duyet
    var urlParam = new URLSearchParams(window.location.search);
    var idProduct = urlParam.get('id');

    var promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}`,
        method: 'GET'
    });

    promise.then(function (res) {
        // dom den cac the noi dung can call api
        var productDetail = res.data.content;
        var productSize = res.data.content.size;
        var relateProduct = res.data.content.relatedProducts;
        var sizeContent = '';
        var relateContent = '';

        getEle('product-image').src = productDetail.image;
        getEle('product-name').innerHTML = productDetail.name;
        getEle('product-description').innerHTML = productDetail.description;
        getEle('product-price').innerHTML = productDetail.price + "$";

        // Product details ------------------

        for (index = 0; index < productSize.length; index++) {

            var size = productSize[index];

            sizeContent += `
                <a class="text-decoration-none text-dark" href="#">${size}</a>
            `
        };

        getEle('product-size').innerHTML = sizeContent;

        // Relate products -------------------

        for (index = 0; index < relateProduct.length; index++) {

            var relate = relateProduct[index];

            relateContent += `
                <div class="col-4 mt-5">
                    <div class="product-feature-content card">
                        <div class="product-feature-body card-body">
                            <img class="img-fluid" src="${relate.image}" alt="">
                            <h4 style="height: 60px" class="card-title font-weight-lighter text-left">${relate.name}</h4>
                            <p style="height: 73px" class="card-text font-weight-lighter text-left">${relate.shortDescription}</p>
                        </div>
                        <div class="product-feature-footer card-footer text-muted d-flex justify-content-between align-items-center">
                            <a class="orange-button-2 text-decoration-none" href="../detail.html?id=${relate.id}">Buy now</a>
                            <span class="d-block m-auto">${relate.price}$</span>
                        </div>
                    </div>
                </div>
            `
        };

        getEle('relateShoe').innerHTML = relateContent;

    })

    promise.catch(function (error) {
        console.log(error);
    })

};

getProductApiDetail()


