

function showProductsAsideCategorys(cid){
    $("div.eachCategory[cid="+cid+"] a").css("color","#000000");
    $('div.productsAsideCategorys[cid='+cid+']').show();
}

function hideProductsAsideCategorys(cid){
    $("div.eachCategory[cid="+cid+"] a").css("color","white");
    $('div.productsAsideCategorys[cid='+cid+']').hide();
}

$(function () {
    $('div.eachCategory').mouseenter(function () {
        let cid = $(this).attr('cid');//83
        showProductsAsideCategorys(cid);
    })
    $('div.eachCategory').mouseleave(function(){
        let cid = $(this).attr('cid');
        hideProductsAsideCategorys(cid);
    })
    $("div.productsAsideCategorys").mouseenter(function(){
        let cid = $(this).attr("cid");
        showProductsAsideCategorys(cid);
    });
    $("div.productsAsideCategorys").mouseleave(function(){
        let cid = $(this).attr("cid");
        hideProductsAsideCategorys(cid);
    });
})

