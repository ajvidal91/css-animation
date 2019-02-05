

var init = function() {
    var box = document.getElementById("one");
    var box2 = document.getElementById("two");

    box.addEventListener("webkitTransitionEnd", updateTransition, false);
    box.addEventListener("oTransitionEnd", updateTransition, false);
    box.addEventListener("transitionend", updateTransition, false);

    function updateTransition () {
        box.style.width = 500 + "px";
        box2.style.backgroundColor = "#f33";
    }
};

window.addEventListener('DOMContentLoaded', init, false);
