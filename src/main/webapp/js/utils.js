function getData(url,successFunction) {
    jQuery.ajax({
            url: url,
            type: "post",
            data: null,
            dataType: "json",
            success: function(data) {
                console.log(data);
                successFunction(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            },
            complete: function(XMLHttpRequest, textStatus) {
                this; // 调用本次AJAX请求时传递的options参数
            }
    });

};

function startSlide(){
    $("#slider").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 1000,
        namespace: "callbacks",
        before: function () {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
            $('.events').append("<li>after event fired.</li>");
        }
    });
}