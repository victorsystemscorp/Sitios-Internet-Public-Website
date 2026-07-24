(function() {
  document.addEventListener("DOMContentLoaded", function () {
    var isTouch = (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
                  ("ontouchstart" in window) ||
                  (navigator.maxTouchPoints > 0);
    if (isTouch) return;
    document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var num = a.getAttribute("href").replace("tel:", "");
        if (navigator.clipboard && num) {
          navigator.clipboard.writeText(num.replace("+1", "")).catch(function(){});
        }
      });
      a.style.cursor = "text";
    });
  });
})();
