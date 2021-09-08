// tahy đổi nav bar khi scrool
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("header-nav--scrool", window.scrollY > 0)
});
// Đến trang mới khi click
document.getElementById("foodLink").onclick = function () {
    location.href = "foodmenu.html";
};
document.getElementById("drinkLink").onclick = function () {
    location.href = "drinkmenu.html";
};
document.getElementById("NorthFoodLink").onclick = function () {
    location.href = "NorthFood.html";
};
document.getElementById("CentralFoodLink").onclick = function () {
    location.href = "CentralFood.html";
};
document.getElementById("SouthFoodLink").onclick = function () {
    location.href = "SouthFood.html";
};
document.getElementById("MinorityFoodLink").onclick = function () {
    location.href = "MinorityFood.html";
};
document.getElementById("login").onclick = function () {
    location.href = "login.html";
};
// Loc sx khi click
function changeProductList(type, element) {
    var tabs = document.getElementsByClassName('slider__btn');
    for (i = 0 ; i < tabs.length ; i++) {
        tabs[i].style.background = '#ddd';
    }
    element.style.background = '#ff3838';
    switch (type) {
        case 'hoaqua' :
            document.getElementById('hoaqua').style.display = 'block';
            break;
    }
}